using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LiteDB;
using RegistrationService.LiteDB;
using RegistrationService.Models;

namespace RegistrationService.Services
{
    public class CustomerServices : ICustomerServices
    {
        private LiteDatabase _liteDb;

        public CustomerServices(ILiteDbContext liteDbContext)
        {
            _liteDb = liteDbContext.Database;
        }

        public Customers AddCustomer(Customers customer)
        {
            if(customer.VisitTime == DateTime.MinValue)
                customer.VisitTime = DateTime.Now;
            _liteDb.GetCollection<Customers>("Customers").Insert(customer);

            return customer;
        }

        public int DeleteCustomer(Customers customer)
        {
            throw new NotImplementedException();
        }

        public Customers FindCustomerById(int id)
        {
            return _liteDb.GetCollection<Customers>("Customers").
                Find(x => x.Id == id).FirstOrDefault();
        }

        public IEnumerable<Customers> GetAllCustomers()
        {
            return _liteDb.GetCollection<Customers>("Customers").
                FindAll();
        }

        public bool UpdateCustomer(Customers customer)
        {
            return _liteDb.GetCollection<Customers>("Customers")
                .Update(customer);
        }

        public IEnumerable<Customers> VisitReport(DateTime timeFrom, DateTime timeUntil)
        {
          return _liteDb.GetCollection<Customers>("Customers")
            .Find(x => x.VisitTime >= timeFrom && x.VisitTime <= timeUntil);
        }

    }
}
