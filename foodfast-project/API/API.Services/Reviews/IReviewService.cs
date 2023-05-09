using API.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Services
{
    public interface IReviewService
    {
        Task CreateReview(Review review);
        IQueryable<Review> GetReviews(long restaurantID);
        Task IncreaseReviewScore(long reviewID);
        Task DeleteReview(long reviewID);
    }
}
