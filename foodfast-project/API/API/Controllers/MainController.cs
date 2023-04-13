using API.Data.Models;
using API.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    public class MainController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IRestaurantService _restaurantService;
        private readonly IMealService _mealService;
        private readonly IReviewService _reviewService;

        public MainController(IUserService userService, IRestaurantService restaurantService, IMealService mealService, IReviewService reviewService)
        {
            _userService = userService;
            _restaurantService = restaurantService;
            _mealService = mealService;
            _reviewService = reviewService;
        }

        //=======================================================================================================================================
        //Client endpoints
        //=======================================================================================================================================
        [HttpPost("api/food-fast/client/register")]
        
        public async Task<ActionResult> RegisterClient(ClientRegisterModel clientToRegister)
        {
            try
            {
                var client = new Client
                {
                    Name = clientToRegister.Name,
                    Surname = clientToRegister.Surname,
                    BirthDate = clientToRegister.BirthDate,
                    PhoneNumber = clientToRegister.PhoneNumber,
                    Email = clientToRegister.Email,
                    Address = clientToRegister.Address,
                    Password = clientToRegister.Password,
                    Username = clientToRegister.Username
                };

                await _userService.RegisterClient(client);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost("api/food-fast/client/login")]

        public async Task<ActionResult> LoginClient(ClientLoginModel clientToLogin)
        {
            try
            {
                if (await _userService.LoginClient(clientToLogin.Username, clientToLogin.Password))
                {
                    return Ok();
                }
                return BadRequest();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        //=======================================================================================================================================
        //Restaurant endpoints
        //=======================================================================================================================================
        [HttpGet("api/food-fast/restaurants")]
        public async Task<ActionResult<IEnumerable<Restaurant>>> GetRestaurants()
        {
            var result = await _restaurantService.GetRestaurants().ToListAsync();

            if (!result.Any()) 
                return NotFound();

            return Ok(result);
        }


        [HttpGet("api/food-fast/restaurant/{name}")]

        public async Task<ActionResult<Restaurant>> GetRestaurantByName(string restaurantName)
        {
            var restaurant = await _restaurantService.GetRestaurantByName(restaurantName);

            if (restaurant == null)
            {
                return BadRequest();
            }

            return Ok(restaurant);
        }


        [HttpPost("api/food-fast/restaurant/create")]

        public async Task<ActionResult> CreateRestaurant(RestaurantCreateModel restaurantToCreate)
        {
            try
            {
                var restaurant = new Restaurant
                {
                   Name = restaurantToCreate.Name,
                   Description = restaurantToCreate.Description,
                   WorkingHours = restaurantToCreate.WorkingHours,
                   Address = restaurantToCreate.Address,
                   PhoneNumber = restaurantToCreate.PhoneNumber,
                   Available = 1
                };

                await _restaurantService.CreateRestaurant(restaurant);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost("api/food-fast/restaurant/change-availability")]

        public async Task<ActionResult> ChangeRestaurantAvailability(string restaurantName, int state)
        {
            try
            {
                if (await _restaurantService.ChangeRestaurantAvailability(restaurantName, state))
                {
                    return Ok();
                }
                return BadRequest();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //=======================================================================================================================================
        //Reviews of Restaurant endpoints
        //=======================================================================================================================================
        [HttpGet("api/food-fast/restaurant/{name}/reviews")]

        public async Task<ActionResult<IEnumerable<Review>>> GetReviews(string restaurantName)
        {
            var restaurant = await _restaurantService.GetRestaurantByName(restaurantName);
            var result = await _reviewService.GetReviews(restaurant.Id).ToListAsync();

            if (!result.Any())
                return NotFound();

            return Ok(result);
        }


        [HttpPost("api/food-fast/restaurant/{name}/review/create")]

        public async Task<ActionResult> CreateReview(string restaurantName, ReviewCreateModel reviewToCreate)
        {
            try
            {
                var restaurant = await _restaurantService.GetRestaurantByName(restaurantName);
                var review = new Review
                {
                   Author = reviewToCreate.Author,
                   Score = 0,
                   Comment = reviewToCreate.Comment,
                   FkRestaurantidRestaurant = restaurant.Id
                };

                await _reviewService.CreateReview(review);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("api/food-fast/restaurant/{name}/review/{id}/increase-score")]

        public async Task<ActionResult> IncreaseReviewScore(long reviewID)
        {
            try
            {
                await _reviewService.IncreaseReviewScore(reviewID);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


		//=======================================================================================================================================
		//Meals of Restaurant endpoints
		//=======================================================================================================================================
		[HttpGet("api/food-fast/restaurant/{name}/meals")]

		public async Task<ActionResult<IEnumerable<Meal>>> GetRestaurantMeals(string restaurantName)
		{
			var restaurant = await _restaurantService.GetRestaurantByName(restaurantName);
			var result = await _mealService.GetRestaurantMeals(restaurant.Id).ToListAsync();

			if (!result.Any())
				return NotFound();

			return Ok(result);
		}


		[HttpPost("api/food-fast/restaurant/{name}/meal/create")]

		public async Task<ActionResult> CreateMeal(string restaurantName, MealCreateModel mealToCreate)
		{
			try
			{
				var restaurant = await _restaurantService.GetRestaurantByName(restaurantName);
				var meal = new Meal
				{
					Name = mealToCreate.Name,
                    Price = mealToCreate.Price,
                    Size = mealToCreate.Size,
                    Package = mealToCreate.Package,
					FkRestaurantidRestaurant = restaurant.Id
				};

				await _mealService.CreateMeal(meal);
				return Ok();
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}


	}
}