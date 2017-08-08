using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MovieTuned_1.Models
{
    public class TVShowsRepo : ITVShows
    {
        mtdbEntities3 db = new mtdbEntities3();
        public void AddShow(TvShow t)
        {
            db.TvShows.Add(t);
            db.SaveChanges();
        }

        public TvShow GetShowInfo(string title)
        {
            throw new NotImplementedException();
        }

        public List<TvShow> GetShows()
        {
            throw new NotImplementedException();
        }
    }
}