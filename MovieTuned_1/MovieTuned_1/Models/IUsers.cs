using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieTuned_1.Models
{
    public interface IUsers
    {
        /*
            METHODS OF AN INTERFACE ARE PUBLIC BY DEFAULT
        */

        void Add(User u);
        bool IsUserNameAvailable(String UserName);
        bool IsEmailAvailable(String email);
        String FindUser(User u);
        String Authenticate(User u);
    }
}
