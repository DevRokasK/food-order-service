using API.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Repositories
{
    public interface IDBMealRepository
    {
		IQueryable<Meal> GetRestaurantMeals(long restaurantID);
		Task CreateMeal(Meal meal);
	}
}
