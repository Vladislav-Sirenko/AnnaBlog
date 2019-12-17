using System;
using System.Collections.Generic;
using System.Linq;
using ann_blog.Context;
using ann_blog.Models;

namespace ann_blog.Services
{
    class TripService : ITripService
    {
        private BlogContext _context;

        public TripService(BlogContext context)
        {
            _context = context;
        }
        public int Add(Trip trip)
        {
            trip.Date = DateTime.Now;
            _context.Trips.Add(trip);
            _context.SaveChanges();
            return trip.Id;
        }

        public List<Trip> GetAll(int skip)
        {
            var trips = _context.Trips.OrderByDescending(x => x.Date).Skip(skip).Take(3).ToList();
            foreach (var trip in trips)
            {
                trip.Photos = _context.TripPhotos.Where(x => x.TripId == trip.Id).ToList();
            }
            return trips;
        }

        public void Delete(int id)
        {
            var photos = _context.TripPhotos.Where(x => x.TripId == id);
            _context.TripPhotos.RemoveRange(photos);
            var trip = _context.Trips.FirstOrDefault(x => x.Id == id);
            _context.Trips.Remove(trip);
            _context.SaveChanges();
        }

        public void Update(Trip art)
        {
            throw new NotImplementedException();
        }

        public void AddPhotosToTrip(List<TripPhoto> photos, int id)
        {
            foreach (var photo in photos)
            {
                photo.TripId = id;
            }
            _context.TripPhotos.AddRange(photos);
            _context.SaveChanges();
        }
    }
}