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
    public class TripController : ControllerBase
    {
        private ITripService _tripService;

        public TripController(ITripService service)
        {
            _tripService = service;
        }
        // GET: api/Trip
        [HttpGet("{id}")]
        public List<Trip> Get(int id)
        {
            return _tripService.GetAll(id);
        }

        // POST: api/Trip
        [HttpPost]
        public int Post([FromBody] Trip trip)
        {
            return _tripService.Add(trip);
        }

        // PUT: api/Trip/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _tripService.Delete(id);
        }
        [HttpPost("{id}/UploadFile")]
        public HttpResponseMessage UploadFile(int id)
        {
            HttpResponseMessage response = new HttpResponseMessage();
            var files = HttpContext.Request.Form.Files;
            List<TripPhoto> list = new List<TripPhoto>();
            if (files.Count > 0)
            {
                foreach (IFormFile fil in files)
                {
                    using (var ms = new MemoryStream())
                    {
                        fil.CopyTo(ms);
                        var fileBytes = ms.ToArray();
                        list.Add(new TripPhoto() { Code = Convert.ToBase64String(fileBytes) });
                    }
                }
            }
            _tripService.AddPhotosToTrip(list, id);

            return response;
        }
    }
}
