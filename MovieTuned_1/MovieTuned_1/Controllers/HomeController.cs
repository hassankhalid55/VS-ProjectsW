using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MovieTuned_1.Models;

namespace MovieTuned_1.Controllers
{
    public class HomeController : Controller
    {
        IMovies movies;

        public HomeController(IMovies m)
        {
            movies = m;
        }

        // GET: Home
        public ActionResult Index()
        {
            List<Movie> movieList = movies.GetMovies(); 
            return View(movieList);
        }

        public ActionResult MovieInfo(bool isInWatchlist = false)
        {
            String name = Request.QueryString["Name"];
            Movie m = movies.GetMovieInfo(name);
            if (m != null)
            {
                ViewBag.InWatchlist = false;
                if (isInWatchlist)
                {
                    ViewBag.InWatchlist = true;
                }
                return View(m);
            }

            else
               return RedirectToAction("Index");
        }

        public ActionResult WatchList()
        {
            return View();
        }

        public ActionResult Login()
        {
            return View();
        }

        public ActionResult SignUp()
        {
            return View();
        }
    }
}