using System;
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
        public Goal Get(Guid id)
        {
            var goalEntity = _repository.GetGoalEntity(id).Result;
            var goal = _mapper.Map<Goal>(goalEntity);
            return goal;
        }
    }
}