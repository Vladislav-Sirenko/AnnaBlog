using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ann_blog.Models
{
    public class Trip
    {
        [Key]
        public int Id { get; set; }
        public string Data { get; set; }
        public ICollection<TripPhoto> Photos { get; set; }
    }
}
