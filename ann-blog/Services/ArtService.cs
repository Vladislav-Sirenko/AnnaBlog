using System;
using System.Collections.Generic;
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
        public void Add(Art art, List<ArtPhoto> photos)
        {
            var item = _context.Arts.Add(art);
            foreach (var photo in photos)
            {
                photo.PostId = item.Entity.Id;
            }
            _context.ArtPhotos.AddRange(photos);
            _context.SaveChanges();
        }

        public void Delete(Art art)
        {
            throw new NotImplementedException();
        }

        public void Update(Art art)
        {
            throw new NotImplementedException();
        }
    }
}