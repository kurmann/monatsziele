using System;
using System.Linq;
using AmbitionJournal.Repositories;
using FluentAssertions;
using Xunit;

namespace AmbitionJournalTests
{
    public class AmbitionControllerTests
    {
        [Fact]
        public void Test1()
        {
            // arrange
            var ambitionRepository = new AmbitionRepository();

            // act
            var ambitions = ambitionRepository.GetAmbitions();

            // assert
            ambitions.Count().Should().Be(3);
            ambitions.ElementAt(2).Id.Should().Be("8285694e-bf53-4cf7-a01f-bdf40f86e95e");
        }
    }
}
