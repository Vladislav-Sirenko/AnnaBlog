using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ann_blog.Models;
using Microsoft.EntityFrameworkCore;

namespace ann_blog.Context
{
    public class BlogContext : DbContext
    {
        public BlogContext(DbContextOptions<BlogContext> options) : base(options)
        {
        }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Certificate> Certificates { get; set; }
        public DbSet<Art> Arts { get; set; }
        public DbSet<ArtPhoto> ArtPhotos { get; set; }
        public DbSet<Trip> Trips { get; set; }
        public DbSet<TripPhoto> TripPhotos { get; set; }
    }
}
