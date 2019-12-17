using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ann_blog.Models;
using ann_blog.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ann_blog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private IPostService _postService;
        public PostController(IPostService service)
        {
            _postService = service;
        }
        // GET: api/Post
        [HttpGet("{id}")]
        public List<Post> Get(int id)
        {
            return _postService.GetAll(id);
        }

        // POST: api/Post
        [HttpPost]
        public int Post([FromBody] Post post)
        {
            return _postService.Add(post);
        }

        // PUT: api/Post/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _postService.Delete(id);
        }
    }
}
