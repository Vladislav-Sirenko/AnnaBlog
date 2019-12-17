using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ann_blog.Models;

namespace ann_blog.Services
{
    public interface IUserService
    {
        bool Auth(AdminViewModel model);
    }
}
