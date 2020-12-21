using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RegistrationService.Models;

namespace RegistrationService.Services
{
    public interface ICustomerServices
    {
        Customers AddCustomer(Customers customer); //Create
        IEnumerable<Customers> GetAllCustomers();//ReadAll
        Customers FindCustomerById(int id);//ReadById
        bool UpdateCustomer(Customers customer);//Update
        int DeleteCustomer(Customers customer);//Delete
        IEnumerable<Customers> VisitReport(DateTime timeFrom, DateTime timeUntil);//Search time span

    }
}
