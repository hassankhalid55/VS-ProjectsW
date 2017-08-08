using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MovieTuned_1.Models
{
    public class WatclistRepo : IWatchlist
    {
        mtdbEntities3 db = new mtdbEntities3();

        public void AddToWatchList(TvShow s, string userName)
        {
            db.Watchlists.Add(new Watchlist { UserName = userName, TVShow = s.Title });
            db.SaveChanges();
        }

        public void AddToWatchlist(Movie m, string userName)
        {
            db.Watchlists.Add(new Watchlist { UserName = userName, MovieTitle = m.Title });
            db.SaveChanges();
        }

        public ArrayList GetWatchList(string userName)
        {
            var q = from watchlist in db.Watchlists
                    join movie in db.Movies1
                    on watchlist.MovieTitle equals movie.Title
                    where (watchlist.UserName == userName)
                    select movie;
            ArrayList arr = new ArrayList();
            foreach (var x in q)
            {
                arr.Add(x);
            }
                    

            return arr;
        }

        public void Remove(string title, String userName)
        {
            var list = db.Watchlists.Where(z=>z.MovieTitle == "Zootopia").ToList();
            var y = db.Watchlists.FirstOrDefault(x => x.UserName == userName && x.MovieTitle == title);
            db.Watchlists.Remove(y);
            db.SaveChanges();
        }
    }
}