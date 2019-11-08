using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ann_blog.Models;

namespace ann_blog.Services
{
    public interface IArtService
    {
        List<Art> GetAll(int skip);
        int Add(Art art);
        void Delete(Art art);
        void Update(Art art);
        void AddPhotosToArt(List<ArtPhoto> photos, int id);
    }
}
