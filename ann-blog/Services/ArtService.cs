using System;
using System.Collections.Generic;
using System.Linq;
using ann_blog.Context;
using ann_blog.Models;

namespace ann_blog.Services
{
    class ArtService : IArtService
    {
        private readonly BlogContext _context;

        public ArtService(BlogContext context)
        {
            _context = context;
        }

        public int Add(Art art)
        {
            art.Date = DateTime.Now;
            _context.Arts.Add(art);
            _context.SaveChanges();
            return art.Id;
        }

        public List<Art> GetAll(int skip)
        {
            var arts = _context.Arts.OrderByDescending(x => x.Date).Skip(skip).Take(5).ToList();
            foreach (var trip in arts)
            {
                trip.Photos = _context.ArtPhotos.Where(x => x.ArtId == trip.Id).ToList();
            }
            return arts;
        }

        public void Delete(Art art)
        {
            throw new NotImplementedException();
        }

        public void Update(Art art)
        {
            throw new NotImplementedException();
        }

        public void AddPhotosToArt(List<ArtPhoto> photos, int id)
        {
            foreach (var photo in photos)
            {
                photo.ArtId = id;
            }
            _context.ArtPhotos.AddRange(photos);
            _context.SaveChanges();
        }
    }
}