using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ann_blog.Models
{
    public class Art
    {
        [Key]
        public int Id { get; set; }
        public string Data { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public ICollection<ArtPhoto> Photos { get; set; }
    }
}
