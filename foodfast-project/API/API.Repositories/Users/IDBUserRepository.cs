using API.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Repositories
{
    public interface IDBUserRepository
    {
        Task RegisterClient(Client client);

        Task<bool> LoginClient(string username, string password);
    }
}
