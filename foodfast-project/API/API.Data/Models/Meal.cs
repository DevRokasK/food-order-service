using System;
using System.Collections.Generic;

namespace API.Data.Models;

public partial class Meal
{
    public long Id { get; set; }

    public string Name { get; set; } = null!;

    public double Price { get; set; }

    public string Size { get; set; } = null!;

    public string Package { get; set; } = null!;

	public long FkRestaurantidRestaurant { get; set; }
}
