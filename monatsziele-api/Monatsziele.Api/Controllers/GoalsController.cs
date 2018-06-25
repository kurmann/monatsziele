using System;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
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
        public ActionResult Create([FromBody] GoalCreate goalCreate)
        {
            _repository.CreateGoal(goalCreate);
            return Ok("it works");
        }
        

        [HttpGet("{id:Guid}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
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