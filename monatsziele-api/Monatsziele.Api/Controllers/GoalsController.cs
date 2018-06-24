using System;
using System.Net;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Monatsziele.Api.Models;
using Monatsziele.Repository;

namespace Monatsziele.Api.Controllers
{
    [Route("[controller]")]
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

        [HttpGet("{id}")]
        public ActionResult Get(Guid id)
        {
            var tableResult = _repository.GetGoalEntity(id);
            var entityResult = tableResult.Result;
            switch (entityResult.HttpStatusCode)
            {
                case 404:
                    return NotFound();
                case 200:
                    var goalEntity = entityResult.Result;
                    var goal = _mapper.Map<Goal>(goalEntity);
                    return Ok(goal);
            }
            return new StatusCodeResult(500);
        }
    }
}