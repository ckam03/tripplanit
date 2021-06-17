using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace tripplanit.Models
{
    public class Location 
    {
        public string location { get; set; }
        public double lat { get; set; }
        public double lng { get; set; }
        public string src { get; set; }

    


    }
}