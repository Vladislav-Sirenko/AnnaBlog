using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using ann_blog.Models;
using ann_blog.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ann_blog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtController : ControllerBase
    {
        private IArtService _artService;
        public ArtController(IArtService artService)
        {
            _artService = artService;
        }
        // GET: api/Art
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // POST: api/Art
        public HttpResponseMessage Post([FromBody] Art art)
        {
            HttpResponseMessage response = new HttpResponseMessage();
            List<ArtPhoto> list = new List<ArtPhoto>();
            var files = HttpContext.Request.Form.Files;
            if (files.Count > 0)
            {
                foreach (IFormFile fil in files)
                {
                    using (var ms = new MemoryStream())
                    {
                        fil.CopyTo(ms);
                        var fileBytes = ms.ToArray();
                        list.Add(new ArtPhoto() {Code = Convert.ToBase64String(fileBytes)});
                    }
                }
            }
            _artService.Add(art, list);
            return response;
        }

        // PUT: api/Art/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
