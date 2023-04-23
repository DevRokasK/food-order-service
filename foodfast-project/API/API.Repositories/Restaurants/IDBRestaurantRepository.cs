using API.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Repositories
{
    public interface IDBRestaurantRepository
    {
        Task CreateRestaurant(Restaurant restaurant);
        Task<bool> ChangeRestaurantAvailability(string restaurantName, int state);
        Task<Restaurant> GetRestaurantByName(string restaurantName);
        IQueryable<Restaurant> GetRestaurants();
		IQueryable<Restaurant> GetRestaurantsFiltered(string fileter);
		Task UpdateRestaurant(string restaurantName, RestaurantUpdateModel restaurant);
	}
}
