using API.Data.Models;
using API.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Services
{
    public class RestaurantService : IRestaurantService
    {
        private readonly IDBRestaurantRepository _DBRestaurantRepository;

        public RestaurantService(IDBRestaurantRepository dbRestaurantRepository)
        {
            _DBRestaurantRepository = dbRestaurantRepository;
        }

        public async Task CreateRestaurant(Restaurant restaurant)
        {
            await _DBRestaurantRepository.CreateRestaurant(restaurant);
        }

        public async Task<bool> ChangeRestaurantAvailability(string restaurantName, int state)
        {
            return await _DBRestaurantRepository.ChangeRestaurantAvailability(restaurantName, state);
        }

        public async Task<Restaurant> GetRestaurantByName(string restaurantName)
        {
            return await _DBRestaurantRepository.GetRestaurantByName(restaurantName);
        }

        public IQueryable<Restaurant> GetRestaurants()
        {
            return _DBRestaurantRepository.GetRestaurants();
        }

    }
}
