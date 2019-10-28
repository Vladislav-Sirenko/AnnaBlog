using System;
using System.Collections.Generic;
using System.Linq;
using ann_blog.Context;
using ann_blog.Models;

namespace ann_blog.Services
{
    class CertificateService : ICertificateService
    {
        private readonly BlogContext _context;
        public CertificateService(BlogContext context)
        {
            _context = context;
        }
        public List<Certificate> GetAll() => _context.Certificates.ToList();
        public void AddImage(string image)
        {
            _context.Certificates.Add(new Certificate() { Code = image });
            _context.SaveChanges();
        }
    }
}
