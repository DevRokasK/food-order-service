using API.Data.Models;
using API.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Services
{
    public class UserService : IUserService
    {
        private readonly IDBUserRepository _DBUserRepository;

        public UserService(IDBUserRepository dbUserRepository)
        {
            _DBUserRepository = dbUserRepository;
        }

        public async Task RegisterClient(Client client)
        {
            await _DBUserRepository.RegisterClient(client);
        }

        public async Task<bool> LoginClient(string username, string password)
        {
            return await _DBUserRepository.LoginClient(username, password);
        }
    }
}
