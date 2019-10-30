using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ann_blog.Models;

namespace ann_blog.Services
{
    public interface ICertificateService
    {
        List<Certificate> GetAll();
        void AddImage(string toBase64String);
        void Remove(int id);
    }
}
