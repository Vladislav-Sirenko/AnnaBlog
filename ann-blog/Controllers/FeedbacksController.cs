using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Models;
using Services;

namespace ann_blog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbacksController : ControllerBase
    {
        private IEmailService _emailService;
        public FeedbacksController(IEmailService emailService)
        {
            _emailService = emailService;
        }
        // GET: api/Feedbacks
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Feedbacks/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Feedbacks
        [HttpPost]
        public  void Post([FromBody] FeedbackModel model)
        {
            const string WEBSERVICE_URL = "https://chatapi.viber.com/pa/send_message";
            try
            {
                var webRequest = System.Net.WebRequest.Create(WEBSERVICE_URL);
                if (webRequest != null)
                {
                    string stringData = "{\r\n   \"receiver\":\"f2AvTANRh29BtxyjIacLHQ==\",\r\n   \"min_api_version\":1,\r\n   \"sender\":{\r\n      \"name\":\"John McClane\",\r\n      \"avatar\":\"http://avatar.example.com\"\r\n   },\r\n   \"tracking_data\":\"tracking data\",\r\n   \"type\":\"text\",\r\n   \"text\":\"AAAA\"\r\n}"; // place body here

                    var data = Encoding.Default.GetBytes(stringData.Replace("AAAA","Email:" + model.Email + " Phone:" + model.Phone + " Text:" + model.Text)); // note: choose appropriate encoding
                    webRequest.Method = "POST";
                    webRequest.Timeout = 12000;
                    webRequest.ContentType = "application/json";
                    webRequest.Headers.Add("X-Viber-Auth-Token", "4a641980da27d6e3-73cca053d4058942-48b24974f1fc40c2");
                    webRequest.ContentLength = data.Length;
                    var newStream = webRequest.GetRequestStream(); // get a ref to the request body so it can be modified
                    newStream.Write(data, 0, data.Length);
                    newStream.Close();


                    using (System.IO.Stream s = webRequest.GetResponse().GetResponseStream())
                    {
                        using (System.IO.StreamReader sr = new System.IO.StreamReader(s))
                        {
                            var jsonResponse = sr.ReadToEnd();
                            Console.WriteLine(String.Format("Response: {0}", jsonResponse));
                        }
                    }
                    _emailService.SendEmailAsync("annatimachova@gmail.com", "Тема", "Email:" + model.Email + " Phone:" + model.Phone + " Text:" + model.Text);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }

        // PUT: api/Feedbacks/5
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
