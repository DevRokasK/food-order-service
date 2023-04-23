using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Data.Models
{
	public class RestaurantUpdateModel
	{
		public string? Name { get; set; }

		public string? Description { get; set; }

		public string? WorkingHours { get; set; }

		public string? Address { get; set; }

		public string? PhoneNumber { get; set; }
	}
}
