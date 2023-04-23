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

		public IQueryable<Restaurant> GetRestaurantsFiltered(string filter)
		{
			// convert filter to lowercase for case-insensitive matching
			filter = filter.ToLower();

			// filter the restaurants based on whether the filter string appears in their description
			var filteredRestaurants = _context.Restaurants
				.Where(r => r.Description.ToLower().Contains(filter));

			return filteredRestaurants;
		}

		public async Task UpdateRestaurant(string restaurantName, RestaurantUpdateModel restaurant)
		{
            Restaurant oldRestaurant = await _context.Restaurants.SingleOrDefaultAsync(r => r.Name == restaurantName);
            if (oldRestaurant != null)
            {
				// Update only the non-null properties of the oldRestaurant object with the values from the RestaurantUpdateModel
				if (restaurant.Description != null)
				{
					oldRestaurant.Description = restaurant.Description;
				}
				if (restaurant.WorkingHours != null)
				{
					oldRestaurant.WorkingHours = restaurant.WorkingHours;
				}
				if (restaurant.Address != null)
				{
					oldRestaurant.Address = restaurant.Address;
				}
				if (restaurant.PhoneNumber != null)
				{
					oldRestaurant.PhoneNumber = restaurant.PhoneNumber;
				}

				// Save the changes to the database
				await _context.SaveChangesAsync();
			}
			else
			{
				// Throw a custom exception to indicate that the specified restaurant was not found
				throw new Exception($"Restaurant with name '{restaurantName}' not found");
			}
		}

	}
}
