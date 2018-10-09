using System;
using System.Linq;
using AmbitionJournal.Controllers;
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
            var ambitionsController = new AmbitionsController();

            // act
            var ambitions = ambitionsController.Get().Value;

            // assert
            ambitions.Count().Should().Be(3);
            ambitions.ElementAt(2).Id.Should().Be("8285694e-bf53-4cf7-a01f-bdf40f86e95e");
        }
    }
}
