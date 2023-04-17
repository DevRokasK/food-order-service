using API.Data.Models;
using API.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Services
{
    public class ReviewService : IReviewService
    {
        private readonly IDBReviewRepository _DBReviewRepository;

        public ReviewService(IDBReviewRepository dbReviewRepository)
        {
            _DBReviewRepository = dbReviewRepository;
        }

        public async Task CreateReview(Review review)
        {
            await _DBReviewRepository.CreateReview(review);
        }

        public IQueryable<Review> GetReviews(long restaurantID)
        {
            return _DBReviewRepository.GetReviews(restaurantID);
        }

        public async Task IncreaseReviewScore(long reviewID)
        {
            await _DBReviewRepository.IncreaseReviewScore(reviewID);
        }
    }
}
