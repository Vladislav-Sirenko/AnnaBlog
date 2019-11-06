using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ann_blog.Models;

namespace ann_blog.Services
{
    public interface IArtService
    {
        void Add(Art art, List<ArtPhoto> photo);
        void Delete(Art art);
        void Update(Art art);
    }
}
