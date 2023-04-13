using System;
using System.Collections.Generic;

namespace API.Data.Models;

public partial class Restaurant
{
    public long Id { get; set; }

    public string Name { get; set; } = null!;

    public string Description { get; set; } = null!;

    public string WorkingHours { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string PhoneNumber { get; set; } = null!;

    public int Available { get; set; }
}
