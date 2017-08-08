using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MovieTuned_1.Models;
using System.Collections;

namespace MovieTuned_1.Controllers
{
    public class AccountsController : Controller
    {
        IUsers users;
        IMovies movies;
        ITVShows shows;
        IWatchlist watchlist;

        public AccountsController(IUsers u, IMovies m, ITVShows t, IWatchlist w)
        {
            users = u;
            movies = m;
            shows = t;
            watchlist = w;
        }

        // GET: Accounts
        [HttpPost]
        public ActionResult Register(User u)
        {
            users.Add(u);
            return RedirectToAction("Index", "Home");
        }

        public JsonResult VerifyUser(String userName)
        {
            
            return this.Json(true, JsonRequestBehavior.AllowGet);

        }

        [HttpPost]
        public ActionResult Login(String UserName, String Password)
        {
            User u = new Models.User { UserName = UserName, Password = Password };
            String result = users.Authenticate(u);
            if (result != null)
            {
                Session["UserName"] = u.UserName;
                Session["Password"] = u.Password;
                //return Json(new { status = "true", username = u.UserName, password = u.Password }, JsonRequestBehavior.AllowGet);
                if (result == "user")
                {
                    Session["UserType"] = "user";
                    return RedirectToAction("Index", "Home");
                }
                else
                {
                    Session["UserType"] = "admin";
                    return RedirectToAction("AdminPanel");
                }
            }
            else
            {
                Session["UserName"] = null;
                Session["Password"] = null;
                ViewBag.UserType = null;
                return RedirectToAction("Index", "Home");
                //return Json(new { status = "false" }, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult Verifyusername(String userName)
        {
            bool st = users.IsUserNameAvailable(userName);
            return Json(new { status = st }, JsonRequestBehavior.AllowGet);

        }

        public JsonResult IsEmailAvailable(String email)
        {
            bool st = users.IsEmailAvailable(email);
            return Json(new { status = st }, JsonRequestBehavior.AllowGet);

        }

        public JsonResult Verify(String UserName, String Password)
        {
            User u = new Models.User { UserName = UserName, Password = Password };
            String result = users.Authenticate(u);
            if (result != null)
            {
                Session["UserName"] = u.UserName;
                Session["Password"] = u.Password;
                return Json(new {status = "true", username = u.UserName, password = u.Password }, JsonRequestBehavior.AllowGet);
            }
            else
                return Json(new {status = "false" }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult AdminPanel()
        {
            return View();
        }

        public ActionResult AddData(Movie m, HttpPostedFileBase cover)
        {
            if (m.Title != null)
            {
                if (cover != null)
                {
                    String[] temp = cover.FileName.Split('.');
                    String path = m.Title + "." + temp[1];
                    String pathForDb = Server.MapPath("~/Media/" + path);
                    cover.SaveAs(pathForDb);
                    m.Cover = "/Media/" + path;
                }
                movies.AddMovie(m);
                return RedirectToAction("AdminPanel");
            }
            return RedirectToAction("Index", "Home");

        }

        public ActionResult AddTVShow(TvShow show, HttpPostedFileBase cover)
        {
            if (show != null)
            {
                if (cover != null)
                {
                    String[] temp = cover.FileName.Split('.');
                    String path = show.Title + "." + temp[1];
                    String pathForDb = Server.MapPath("~/Media/" + path);
                    cover.SaveAs(pathForDb);
                    show.Cover = "/Media/" + path;
                }
                shows.AddShow(show);
                return RedirectToAction("AdminPanel");
            }
            return RedirectToAction("Index", "Home");

        }

        public ActionResult Logout()
        {
            if (Session["UserName"] != null)
            {
                Session.Clear();
            }
            return RedirectToAction("Index", "Home");
        }

        public void AddToWatchList(String Title)
        {
            if (Session["UserName"] != null)
                watchlist.AddToWatchlist(new Movie { Title = Title}, Session["UserName"].ToString());
        }

        public ActionResult WatchList(String userName)
        {
            ArrayList arr = watchlist.GetWatchList(userName);
            ViewBag.Watchlist = arr;
            
            return View();
        }

        public ActionResult RemoveFromWatchlist(String Title)
        {
            watchlist.Remove(Title, Session["UserName"].ToString());
            return RedirectToAction("MovieInfo", "Home", new { Name = Title });
        }

    }
}