using API.Data.Models;
using API.Repositories;
using API.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add Dependency injection
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IDBUserRepository, DBUserRepository>();
builder.Services.AddScoped<IRestaurantService, RestaurantService>();
builder.Services.AddScoped<IDBRestaurantRepository, DBRestaurantRepository>();
builder.Services.AddScoped<IMealService, MealService>();
builder.Services.AddScoped<IDBMealRepository, DBMealRepository>();
builder.Services.AddScoped<IReviewService, ReviewService>();
builder.Services.AddScoped<IDBReviewRepository, DBReviewRepository>();



builder.Services.AddDbContext<DatabaseContext>(options =>
{
    options.UseSqlite("Data Source=database.db");
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseCors(options => options.AllowAnyOrigin());
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();

//app.UseEndpoints(endpoints =>
//{
//    endpoints.MapControllers(); 
//});

app.MapControllers();

app.Run();
