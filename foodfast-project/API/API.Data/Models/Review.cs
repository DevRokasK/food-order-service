using System;
using System.Collections.Generic;

namespace API.Data.Models;

public partial class Review
{
    public long Id { get; set; }

    public string Author { get; set; } = null!;

    public long Score { get; set; }

    public string? Comment { get; set; }

    public long FkRestaurantidRestaurant { get; set; }
}
