﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ann_blog.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public int PostId { get; set; }
    }
}
