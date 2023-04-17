using API.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Repositories
{
    public class DBUserRepository : IDBUserRepository
    {
        private readonly DatabaseContext _context;

        public DBUserRepository(DatabaseContext context)
        {
            _context = context;
        }

        public async Task RegisterClient(Client client)
        {
            await _context.Clients.AddAsync(client);
            await _context.SaveChangesAsync();
        }

        public async Task<bool> LoginClient(string username, string password)
        {
            var user = await _context.Clients.FirstOrDefaultAsync(c => c.Username == username);

            if (user != null)
            {
                if(user.Password.Equals(password))
                {
                    return true;
                }
            }

            return false;
        }
    }
}
