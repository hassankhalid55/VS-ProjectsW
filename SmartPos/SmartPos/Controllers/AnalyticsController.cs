using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Highsoft.Web.Mvc.Charts;

namespace SmartPos.Controllers
{
    public class AnalyticsController : Controller
    {
        // GET: Analytics
        public ActionResult Dashboard()
        {
            
            return View();
        }
    }
}