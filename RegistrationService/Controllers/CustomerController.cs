using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RegistrationService.Models;
using RegistrationService.Services;

namespace RegistrationService.Controllers
{
    [ApiController]
    public class CustomerController : Controller
    {
        private readonly ICustomerServices _customerServices;
        public CustomerController(ICustomerServices services)
        {
            _customerServices = services;
        }

        [HttpPost]
        [Route("Register")]
        public ActionResult<Customers> AddCustomer(Customers customer)
        {
            var customers = _customerServices.AddCustomer(customer);
            if (customers == null)
                return NotFound();
            return customers;
        }

    }
}