using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Data.Models
{
	public class MealCreateModel
	{
		public string Name { get; set; } = null!;

		public double Price { get; set; }

		public string Size { get; set; } = null!;

		public string Package { get; set; } = null!;

	}
}
