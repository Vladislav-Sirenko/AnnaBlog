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
    public class CertificateController : ControllerBase
    {
        private ICertificateService _certificateService;

        public CertificateController(ICertificateService certificateService)
        {
            _certificateService = certificateService;
        }

        // GET: api/Certificate
        [HttpGet]
        public List<Certificate> Get() => _certificateService.GetAll();

        // POST: api/Certificate
        [HttpPost]
        public HttpResponseMessage Post()
        {
            HttpResponseMessage response = new HttpResponseMessage();
            var files = HttpContext.Request.Form.Files;
            if (files.Count > 0)
            {
                foreach (IFormFile fil in files)
                {
                    using (var ms = new MemoryStream())
                    {
                        fil.CopyTo(ms);
                        var fileBytes = ms.ToArray();
                        _certificateService.AddImage(Convert.ToBase64String(fileBytes));
                    }
                }
            }

            return response;
        }


        // PUT: api/Certificate/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
           _certificateService.Remove(id);
        }
    }
}
