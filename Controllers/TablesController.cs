using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNetCore.Mvc;

namespace Monatsziele.Api.Controllers
{
    public class TablesController : ApiController
    {
        public IHttpActionResult CreateTable()
        {
            return View();
        }
    }
}