using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieTuned_1.Models
{
    public interface IWatchlist
    {
        /*
            METHODS OF AN INTERFACE ARE PUBLIC BY DEFAULT
        */
        void AddToWatchlist(Movie m, String userName);
        void AddToWatchList(TvShow s, String userName);
        ArrayList GetWatchList(String userName);
        void Remove(string title, String userName);
    }
}
