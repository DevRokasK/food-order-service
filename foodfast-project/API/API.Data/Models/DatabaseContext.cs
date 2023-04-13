using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace API.Data.Models;

public partial class DatabaseContext : DbContext
{
    public DatabaseContext()
    {
    }

    public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Client> Clients { get; set; }

    public virtual DbSet<Meal> Meals { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<OrderMeal> OrderMeals { get; set; }

    public virtual DbSet<Restaurant> Restaurants { get; set; }

    public virtual DbSet<Review> Reviews { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlite("Data Source=database.db");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Client>(entity =>
        {
            entity.HasKey(e => e.Id);

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Address).HasColumnName("address");
            entity.Property(e => e.BirthDate).HasColumnName("birth_date");
            entity.Property(e => e.Email).HasColumnName("email");
            entity.Property(e => e.Name).HasColumnName("name");
            entity.Property(e => e.PhoneNumber).HasColumnName("phone_number");
            entity.Property(e => e.Surname).HasColumnName("surname");
            entity.Property(e => e.Password).HasColumnName("password");
            entity.Property(e => e.Username).HasColumnName("username");
        });

        modelBuilder.Entity<Meal>(entity =>
        {
            entity.HasKey(e => e.Id);

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name).HasColumnName("name");
            entity.Property(e => e.Package).HasColumnName("package");
            entity.Property(e => e.Price)
                .HasColumnType("decimal(8, 2)")
                .HasColumnName("price");
            entity.Property(e => e.Size).HasColumnName("size");
			entity.Property(e => e.FkRestaurantidRestaurant).HasColumnName("fk_Restaurantid_Restaurant");
		});

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.Nr);

            entity.Property(e => e.Nr).HasColumnName("nr");
            entity.Property(e => e.AccountNr).HasColumnName("account_nr");
            entity.Property(e => e.Date).HasColumnName("date");
            entity.Property(e => e.FkClientidClient).HasColumnName("fk_Clientid_Client");
            entity.Property(e => e.FkRestaurantidRestaurant).HasColumnName("fk_Restaurantid_Restaurant");
            entity.Property(e => e.PaymentDate).HasColumnName("payment_date");
            entity.Property(e => e.PaymentMethod).HasColumnName("payment_method");
            entity.Property(e => e.ShippingMethod).HasColumnName("shipping_method");
            entity.Property(e => e.Status).HasColumnName("status");
        });

        modelBuilder.Entity<OrderMeal>(entity =>
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("Order_Meals");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.FkMealidMeal).HasColumnName("fk_Mealid_Meal");
            entity.Property(e => e.FkOrderidOrder).HasColumnName("fk_Orderid_Order");
            entity.Property(e => e.Quantity).HasColumnName("quantity");
        });

        modelBuilder.Entity<Restaurant>(entity =>
        {
            entity.HasKey(e => e.Id);

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Address).HasColumnName("address");
            entity.Property(e => e.Description).HasColumnName("description");
            entity.Property(e => e.Name).HasColumnName("name");
            entity.Property(e => e.PhoneNumber).HasColumnName("phone_number");
            entity.Property(e => e.WorkingHours).HasColumnName("working_hours");
            entity.Property(e => e.Available).HasColumnName("available");
        });

        modelBuilder.Entity<Review>(entity =>
        {
            entity.HasKey(e => e.Id);

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Author).HasColumnName("author");
            entity.Property(e => e.Comment).HasColumnName("comment");
            entity.Property(e => e.FkRestaurantidRestaurant).HasColumnName("fk_Restaurantid_Restaurant");
            entity.Property(e => e.Score).HasColumnName("score");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
