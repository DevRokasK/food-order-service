using API.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Repositories
{
    public class DBMealRepository : IDBMealRepository
    {
        private readonly DatabaseContext _context;

        public DBMealRepository(DatabaseContext context)
        {
            _context = context;
        }

		public IQueryable<Meal> GetRestaurantMeals(long restaurantID)
		{
			return _context.Meals.Where(r => r.FkRestaurantidRestaurant == restaurantID);
		}

		public async Task CreateMeal(Meal meal)
		{
			await _context.Meals.AddAsync(meal);
			await _context.SaveChangesAsync();
		}

		public async Task DeleteMeal(long mealID)
		{
			var mealToDelete = await _context.Meals.FindAsync(mealID);

			if (mealToDelete != null)
			{
				_context.Meals.Remove(mealToDelete);
				await _context.SaveChangesAsync();
			}
		}
	}
}
