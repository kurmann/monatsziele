using Microsoft.VisualStudio.TestTools.UnitTesting;
using Monatsziele.Api.Controllers;

namespace Monatsziele.Api.Tests.Controllers
{
    [TestClass]
    public class ValuesControllerTest
    {
        [TestMethod]
        public void CanCreateController()
        {
            // arrange
            ValuesController controller;

            // act
            controller = new ValuesController();

            // assert
            Assert.IsNotNull(controller);
        }
    }
}
