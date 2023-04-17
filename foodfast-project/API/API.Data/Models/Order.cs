using System;
using System.Collections.Generic;

namespace API.Data.Models;

public partial class Order
{
    public long Nr { get; set; }

    public string Date { get; set; } = null!;

    public string AccountNr { get; set; } = null!;

    public string PaymentDate { get; set; } = null!;

    public string Status { get; set; } = null!;

    public long PaymentMethod { get; set; }

    public string ShippingMethod { get; set; } = null!;

    public long FkClientidClient { get; set; }

    public long FkRestaurantidRestaurant { get; set; }
}
