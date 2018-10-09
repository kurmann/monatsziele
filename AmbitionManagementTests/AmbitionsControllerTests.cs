using System;
using Xunit;
using AmbitionManagement.Controllers;
using FluentAssertions;
using System.Linq;

namespace AmbitionManagementTests
{
    public class AmbitionsControllerTests
    {
        [Fact]
        public void Post_Test()
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
