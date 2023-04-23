using API.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Repositories
{
    public class DBReviewRepository : IDBReviewRepository
    {
        private readonly DatabaseContext _context;

        public DBReviewRepository(DatabaseContext context)
        {
            _context = context;
        }

        public async Task CreateReview(Review review)
        {
            await _context.Reviews.AddAsync(review);
            await _context.SaveChangesAsync();
        }

        public IQueryable<Review> GetReviews(long restaurantID)
        {
            return _context.Reviews.Where(r => r.FkRestaurantidRestaurant == restaurantID);
        }

        public async Task IncreaseReviewScore(long reviewID)
        {
            var review = await _context.Reviews.FirstOrDefaultAsync(r => r.Id == reviewID);

            if (review != null)
            {
                review.Score += 1;
                await _context.SaveChangesAsync();
            }
        }

		public async Task DeleteReview(long reviewID)
        {
			var reviewToDelete = await _context.Reviews.FindAsync(reviewID);

			if (reviewToDelete != null)
			{
				_context.Reviews.Remove(reviewToDelete);
				await _context.SaveChangesAsync();
			}
		}

	}
}
