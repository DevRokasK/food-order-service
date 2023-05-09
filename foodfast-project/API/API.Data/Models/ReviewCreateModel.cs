using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Data.Models
{
    public class ReviewCreateModel
    {
        public string Author { get; set; } = null!;

        public string? Comment { get; set; }
    }
}
