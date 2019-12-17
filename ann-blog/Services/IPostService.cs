using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ann_blog.Models;

namespace ann_blog.Services
{
    public interface IPostService
    {
        int Add(Post art);
        void Delete(int id);
        void Update(Post art);
        List<Post> GetAll(int skip);
    }
}
