using Microsoft.AspNetCore.Mvc;
using RegistrationService.Models;
using RegistrationService.Services;
using System;
using System.Collections.Generic;

namespace RegistrationService.Controllers
{
  [Route("admin/")]
  [ApiController]
  public class AdminController : Controller
  {
    private readonly ICustomerServices _customerServices;
    public AdminController(ICustomerServices services)
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
    [HttpGet]
    [Route("GetAllCustomers")]
    public IEnumerable<Customers> GetAllCustomers()
    {
      return _customerServices.GetAllCustomers();
    }
    [HttpGet]
    [Route("VisitReport")]
    public IEnumerable<Customers> GetVisitReport(DateTime timeFrom, DateTime timeUntil)
    {
      return _customerServices.VisitReport(timeFrom,timeUntil);
    }
    [HttpPost]
    [Route("AddUser")]
    public ActionResult<Users> AddUser(Users user)
    {
      var users = _customerServices.AddUser(user);
      if (users == null)
        return NotFound();
      return users;
    }

  }
}
