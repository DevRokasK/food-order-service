using API.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Repositories
{
    public class DBRestaurantRepository : IDBRestaurantRepository
    {
        private readonly DatabaseContext _context;

        public DBRestaurantRepository(DatabaseContext context)
        {
            _context = context;
        }

        public async Task CreateRestaurant(Restaurant restaurant)
        {
            await _context.Restaurants.AddAsync(restaurant);
            await _context.SaveChangesAsync();
        }

        public async Task<bool> ChangeRestaurantAvailability(string restaurantName, int state)
        {
            var restaurant = await _context.Restaurants.FirstOrDefaultAsync(r => r.Name == restaurantName);
            
            if (restaurant != null)
            {
                restaurant.Available = state;
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        public async Task<Restaurant> GetRestaurantByName(string restaurantName)
        {
            return await _context.Restaurants.SingleOrDefaultAsync(r => r.Name == restaurantName);
        }

        public IQueryable<Restaurant> GetRestaurants()
        {
            return _context.Restaurants;
        }

    }
}
