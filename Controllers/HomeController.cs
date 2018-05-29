using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsStore.Models;

namespace SportsStore.Controllers
{
    public class HomeController : Controller
    {
        private DataContext _context;

        public HomeController(DataContext ctx)
        {
            _context = ctx;
        }
        public IActionResult Index()
        {
            ViewBag.Message = "Sports Store App";
            return View(_context.Products.OrderBy(p => p.ProductId).First());
        }
    }
}
