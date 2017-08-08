using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieTuned_1.Models
{
    public interface IMovies
    {
        /*
            METHODS OF AN INTERFACE ARE PUBLIC BY DEFAULT
        */
        void AddMovie(Movie m);
        List<Movie> GetMovies();
        Movie GetMovieInfo(String title);
    }
}
