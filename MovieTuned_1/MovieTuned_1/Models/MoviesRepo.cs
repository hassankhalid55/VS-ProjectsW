using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MovieTuned_1.Models
{
    public class MoviesRepo : IMovies
    {
        mtdbEntities3 db = new mtdbEntities3();
        public void AddMovie(Movie m)
        {
            db.Movies1.Add(m);
            db.SaveChanges();
        }

        public List<Movie> GetMovies()
        {
            List<Movie> movies = db.Movies1.ToList();
            return movies;
        }

        public Movie GetMovieInfo(String title)
        {
            Movie m = db.Movies1.Find(new object[] { title });
            return m;
        }
    }
}