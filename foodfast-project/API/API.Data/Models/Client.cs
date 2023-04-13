using System;
using System.Collections.Generic;

namespace API.Data.Models;

public partial class Client
{
    public long Id { get; set; }

    public string Name { get; set; } = null!;

    public string Surname { get; set; } = null!;

    public string? BirthDate { get; set; }

    public string? PhoneNumber { get; set; }

    public string? Email { get; set; }

    public string Address { get; set; } = null!;

    public string Password { get; set; }

    public string Username { get; set; }
}
