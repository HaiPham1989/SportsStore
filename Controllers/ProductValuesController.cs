using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportsStore.Models;

namespace SportsStore.Controllers
{
    [Route("api/products")]
    public class ProductValuesController : Controller
    {
        private DataContext _context;

        public ProductValuesController(DataContext ctx)
        {
            _context = ctx;
        }

        [HttpGet("{id}")]
        public Product GetProduct(long id)
        {
            return _context.Products.Find(id);
        }
    }
}