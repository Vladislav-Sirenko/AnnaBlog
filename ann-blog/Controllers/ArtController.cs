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
        [HttpGet("{id}")]
        public List<Art> Get(int id)
        {
            return _artService.GetAll(id);
        }

        // POST: api/Art
        public int Post([FromBody] Art art)
        {
            return _artService.Add(art);
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
            _artService.Delete(id);
        }
        [HttpPost("{id}/UploadFile")]
        public HttpResponseMessage UploadFile(int id)
        {
            HttpResponseMessage response = new HttpResponseMessage();
            var files = HttpContext.Request.Form.Files;
            List<ArtPhoto> list = new List<ArtPhoto>();
            if (files.Count > 0)
            {
                foreach (IFormFile fil in files)
                {
                    using (var ms = new MemoryStream())
                    {
                        fil.CopyTo(ms);
                        var fileBytes = ms.ToArray();
                        list.Add(new ArtPhoto() { Code = Convert.ToBase64String(fileBytes) });
                    }
                }
            }
            _artService.AddPhotosToArt(list, id);

            return response;
        }
    }
}
