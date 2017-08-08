using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MovieTuned_1.Models
{
    public class UsersRepo : IUsers
    {
        mtdbEntities3 db = new mtdbEntities3();

        public void Add(User u)
        {
            u.UserType = "user";
            db.Users.Add(u);
            db.SaveChanges();
        }

        
        public bool IsUserNameAvailable(String UserName)
        {
            User user = db.Users.Find(new object[] { UserName });
            if (user == null)
                return true;
            else
                return false;
        }

        public bool IsEmailAvailable(String email)
        {
            User u = db.Users.FirstOrDefault(x => x.Email == email);
            if (u == null)
                return true;
            else
                return false;
        }

        public String FindUser(User u)
        {
            User user = db.Users.Find(new object[] { u.UserName });
            if (user == null)
            {
                return "false";
            }
            else
            {
                return user.UserType;
            }
        }

        public String Authenticate(User u)
        {
            User user = db.Users.Find(new object[] { u.UserName });
            if(user != null)
            {
                if (u.Password == user.Password)
                {
                    if (user.UserType == "user")
                    {
                        return "user";
                    }
                    else
                    {
                        return "admin";
                    }
                }
                return null;
            }
            else
                return null;
        }
    }
}