using System;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.WindowsAzure.Storage.Table;
using Monatsziele.Api.Models;
using Monatsziele.Repository;
using Monatsziele.Repository.Dto;

namespace Monatsziele.Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class GoalsController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IGoalRepository _repository;

        public GoalsController(RepositoryConfig configuration, IMapper mapper)
        {
            _mapper = mapper;
            _repository = new GoalRepository(configuration);
        }

        [HttpGet]
        public Goal[] Get()
        {
            var goalEntities = _repository.GetGoalsEntities().Result;
            var goals = _mapper.Map<Goal[]>(goalEntities);
            return goals;
        }

        [HttpPost]
        [ProducesResponseType(201)]
        [ProducesResponseType(404)]
        public ActionResult Create([FromBody] GoalCreate goalCreate)
        {
            var tableResult = _repository.CreateGoal(goalCreate);
            var entityResult = tableResult.Result;
            return GetInsertTableResult<Goal>(entityResult);
        }

        private ActionResult GetInsertTableResult<T>(TableResult entityResult)
        {
            switch (entityResult.HttpStatusCode)
            {
                case 404:
                    return NotFound();

                case 204:
                    var tableEntity = (TableEntity)entityResult.Result;

                    // create uri
                    var id = tableEntity.RowKey;
                    var uri = new Uri(Request.Path + "/" + id, UriKind.Relative);

                    // get mapped result
                    var mappedResult = _mapper.Map<T>(tableEntity);

                    // return
                    return Created(uri, mappedResult);

                default:
                    return new StatusCodeResult(entityResult.HttpStatusCode);
            }
        }

        private ActionResult GetRetrieveTableResult<T>(TableResult entityResult)
        {
            switch (entityResult.HttpStatusCode)
            {
                case 404:
                    return NotFound();

                case 200:
                    var tableEntity = (TableEntity)entityResult.Result;
                    var mappedResult = _mapper.Map<T>(tableEntity);
                    return Ok(mappedResult);

                default:
                    return new StatusCodeResult(entityResult.HttpStatusCode);
            }
        }
    }
}