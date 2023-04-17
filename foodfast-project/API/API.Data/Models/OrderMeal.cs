using System;
using System.Collections.Generic;

namespace API.Data.Models;

public partial class OrderMeal
{
    public long Id { get; set; }

    public long Quantity { get; set; }

    public long FkMealidMeal { get; set; }

    public long FkOrderidOrder { get; set; }
}
