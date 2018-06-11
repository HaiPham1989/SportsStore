using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using SportsStore.Models;
using SportsStore.Models.BindingTargets;

namespace SportsStore.Controllers
{
    [Route("api/suppliers")]
    public class SupplierValuesController : Controller
    {
        private DataContext _context;

        public SupplierValuesController(DataContext ctx)
        {
            _context = ctx;
        }

        [HttpGet]
        public IEnumerable<Supplier> GetSuppliers()
        {
            return _context.Suppliers;
        }

        [HttpPost]
        public IActionResult CreateSupplier([FromBody] SupplierData sdata)
        {
            if (ModelState.IsValid)
            {
                Supplier s = sdata.Supplier;
                _context.Add(s);
                _context.SaveChanges();
                return Ok(s.SupplierId);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpPut("{id}")]
        public IActionResult ReplaceSupplier(long id, [FromBody] SupplierData sdata)
        {
            if (ModelState.IsValid)
            {
                Supplier s = sdata.Supplier;
                s.SupplierId = id;
                _context.Update(s);
                _context.SaveChanges();
                return Ok(s);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteSupplier(long id)
        {
            _context.Remove(new Supplier { SupplierId = id });
            _context.SaveChanges();
            return Ok(id);
        }
    }
}