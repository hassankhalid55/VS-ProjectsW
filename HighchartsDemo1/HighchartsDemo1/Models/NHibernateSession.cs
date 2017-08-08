using NHibernate;
using NHibernate.Cfg;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HighchartsDemo1.Models
{
    public class NHibernateSession
    {
        public static ISession OpenSession()
        {
            var configuration = new Configuration();
            var configurationPath = HttpContext.Current.Server.MapPath(@"~\Models\NHibernate\hibernate.cfg.xml");
            configuration.Configure(configurationPath);
            //var salesConfigurationFile = HttpContext.Current.Server.MapPath(@"~\Models\NHibernate\Sales.hbm.xml");
            var salesConfigurationFile = HttpContext.Current.Server.MapPath(@"~\Models\NHibernate\CurrencyRate.hbm.xml");
            configuration.AddFile(salesConfigurationFile);
            ISessionFactory sessionFactory = configuration.BuildSessionFactory();
            return sessionFactory.OpenSession();
        }
    }
}