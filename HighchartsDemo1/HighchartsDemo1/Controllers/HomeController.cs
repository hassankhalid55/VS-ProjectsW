using HighchartsDemo1.Models;
using NHibernate;
using NHibernate.Criterion;
using NHibernate.Linq;
using NHibernate.Transform;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HighchartsDemo1.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            using (var session = NHibernateSession.OpenSession())
            {
                //var llist = session.QueryOver<Sales>().List();
                //var q = session.CreateCriteria<Sales>().Add(Expression.Where(x => x.Country == "pak");
                //session.QueryOver<Sales>().Where(x => x.Country == "pak");
                var mlist = session.QueryOver<CurrencyRate>().List();
                //var list1 = session.CreateCriteria<CurrencyRate>().SetProjection(Projections.Property("ToCurrencyCode")).List();

                //var list2 = session.CreateCriteria<CurrencyRate>().SetProjection(Projections.ProjectionList()
                //    .Add(Projections.Property("ToCurrencyCode"), "ToCurrencyCode")
                //    .Add(Projections.Property("FromCurrencyCode"), "FromCurrencyCode")).List(); //THIS WILL PRODUCE A LIST OF ANONYMOUS OBJECTS

                var list3 = session.CreateCriteria<CurrencyRate>().SetProjection(Projections.ProjectionList()
                   .Add(Projections.Property("ToCurrencyCode"), "ToCurrencyCode")
                   .Add(Projections.Property("FromCurrencyCode"), "FromCurrencyCode"))
                   .SetResultTransformer(Transformers.AliasToBean(typeof(CurrencyToFrom)))
                   .List<CurrencyToFrom>(); //THIS WILL PRODUCE A LIST OF OBJECTS SPECIFIED WITH CERTAIN PROPERTIES, E.G: CurrencyToFrom CLASS

                var toCurrencyCodes = (from x in session.Query<CurrencyRate>()
                                      select new { x.AverageRate, x.ToCurrencyCode })
                                      .Take(10);
                var toCurrencyCodes1 = (from x in session.Query<CurrencyRate>()
                                       select new CurrencyToFrom { FromCurrencyCode = x.AverageRate.ToString(), ToCurrencyCode = x.ToCurrencyCode })
                                      .Take(10);

                var list5 = toCurrencyCodes1.ToList();

                var list4 = toCurrencyCodes.ToList();

                return View(mlist);
            }
        }

        public ActionResult TrendsInCurrencyRates()
        {

            return View();
        }

        public ActionResult StackedBar()
        {
            using (var session = NHibernateSession.OpenSession())
            {
                var llist = session.QueryOver<Sales>().List();
                return View(llist);
            }
        }
    }

    class CurrencyToFrom
    {
        public string FromCurrencyCode { get; set; }
        public string ToCurrencyCode { set; get; }
    }

    class Sales_count
    {
        public int sCount { get; set; }
    }
    public class Consumption
    {
        public string Name { get; set; }
        public int [] Consumed { get; set; }
    }

    public class SalesCount
    {
        public int SCount { get; set; }
        public int Year { get; set; }
    }
}