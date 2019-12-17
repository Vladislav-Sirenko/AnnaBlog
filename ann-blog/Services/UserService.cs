using System;
using System.Linq;
using ann_blog.Context;
using ann_blog.Models;

namespace ann_blog.Services
{
    class UserService : IUserService
    {
        private readonly BlogContext _context;
        public UserService(BlogContext context)
        {
            _context = context;
        }
        public bool Auth(AdminViewModel model)
        {
            return _context.Admins.Any(x => x.Login == model.Login && x.Password == model.Password);
        }
    }
}