using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HighchartsDemo1.Models
{
    public class CurrencyRate
    {
        public virtual int ID { set; get; }
        public virtual DateTime Date { set; get; }
        public virtual string FromCurrencyCode { set; get; }
        public virtual string ToCurrencyCode { set; get; }
        public virtual double AverageRate { set; get; }

    }
}