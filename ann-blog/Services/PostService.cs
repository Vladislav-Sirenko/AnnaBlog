using System;
using System.Collections.Generic;
using System.Linq;
using ann_blog.Context;
using ann_blog.Models;

namespace ann_blog.Services
{
    class PostService : IPostService
    {
        private readonly BlogContext _context;

        public PostService(BlogContext context)
        {
            _context = context;
        }

        public int Add(Post post)
        {
            post.Date = DateTime.Now;
            _context.Posts.Add(post);
            _context.SaveChanges();
            return post.Id;
        }

        public void Delete(int id)
        {
            var trip = _context.Posts.FirstOrDefault(x => x.Id == id);
            _context.Posts.Remove(trip);
            _context.SaveChanges();
        }

        public void Update(Post art)
        {
            throw new NotImplementedException();
        }

        public List<Post> GetAll(int skip)
        {
            return _context.Posts.OrderByDescending(x => x.Date).Skip(skip).Take(5).ToList();
        }
    }
}
