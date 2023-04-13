using API.Data.Models;
using API.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Services
{
    public class MealService : IMealService
    {
        private readonly IDBMealRepository _DBMenuRepository;

        public MealService(IDBMealRepository dbMenuRepository)
        {
            _DBMenuRepository = dbMenuRepository;
        }

		public IQueryable<Meal> GetRestaurantMeals(long restaurantID)
		{
			return _DBMenuRepository.GetRestaurantMeals(restaurantID);
		}

		public async Task CreateMeal(Meal meal)
		{
			await _DBMenuRepository.CreateMeal(meal);
		}
	}
}
