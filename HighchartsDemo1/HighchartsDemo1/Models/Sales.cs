using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HighchartsDemo1.Models
{
    public class Sales
    {
        public virtual int Id { get; set; }
        public virtual string Country { get; set; }
        public virtual int Year { get; set; }
        public virtual int Sales_count { get; set; }
    }
}