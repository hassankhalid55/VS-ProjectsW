using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieTuned_1.Models
{
    public interface ITVShows
    {
        /*
            METHODS OF AN INTERFACE ARE PUBLIC BY DEFAULT
        */
        void AddShow(TvShow t);
        List<TvShow> GetShows();
        TvShow GetShowInfo(String title);
    }
}
