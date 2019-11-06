using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ann_blog.Models;

namespace ann_blog.Services
{
    public interface ITripService
    {
        int Add(Trip art);
        void Delete(Trip art);
        void Update(Trip art);
        void AddPhotosToTrip(List<TripPhoto> photo,int id);
        List<Trip> GetAll();
    }
}
