using BuddhaBhumiTaxi.Data;
using BuddhaBhumiTaxi.Models;
using BuddhaBhumiTaxi.Models.DTOs;
using BuddhaBhumiTaxi.Models.Enums;
using BuddhaBhumiTaxi.Models.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace BuddhaBhumiTaxi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleController : ControllerBase
    {
        public readonly ApplicationDbContext applicationDbContext;
        public readonly IVehicleRepo vehicleRepo;

        public object ViewData { get; private set; }

        public VehicleController(ApplicationDbContext applicationDbContext, IVehicleRepo vehicleRepo)
        {
            this.vehicleRepo = vehicleRepo;
            this.applicationDbContext = applicationDbContext;
        }

        [Route("Index")]
        public ActionResult Index()
        {
            var result = new List<TestDto>
            {
                new TestDto
            {
                Name = "Subham B.K",
                Address = "Butwal"
            } ,
                new TestDto
            {
                Name = "Roshan Neupane",
                Address = "Butwal"
            }
            };
            return Ok(result);
            //try
            //{
            //    var result = vehicleRepo.Index();
            //    return Ok(result);
            //}
            //catch (Exception)
            //{
            //    return StatusCode(StatusCodes.Status500InternalServerError, "Error in retriving data from database.");
            //}
        }

        [HttpGet]
        [Route("onevehicledetails/{id?}")]
        public ActionResult<Vehicle> SingleVehicleDetails(int id)
        {
            try
            {
                var result = vehicleRepo.SingleVehicleDetails(id);
                return Ok(result);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error in Retriving Data from Database");
            }
        }

        [HttpGet]
        [Route("CreateVehicle")]
        public ActionResult Create()
        {
            var result = vehicleRepo.DriverOwnerList();
            return Ok(result);
        }

        [HttpPost]
        [Route("CreateVehicle")]
        public ActionResult Create(Vehicle vehicle)
        {
            try
            {
                var result = vehicleRepo.Create(vehicle);
                if (result == null)
                {
                    return BadRequest();
                }
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Can't add new data");
            }

            return Ok();
        }

        [Route("edit/{id?}")]
        [HttpGet]
        public ActionResult Edit(int id)
        {
            try
            {
                var result = vehicleRepo.EditVehicle(id);
                return Ok(result);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [Route("edit/{id?}")]
        [HttpPut]
        public ActionResult Edit(int id, Vehicle vehicle)
        {
            try
            {
                var result = vehicleRepo.SaveEditedVehicle(id, vehicle);

                return Ok();
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Can't Update the data");
            }
        }

        [HttpDelete]
        [Route("delete/{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var result = vehicleRepo.DeleteVehicle(id);

                return Ok();
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "data retriving error from database");
            }
        }

        [HttpGet]
        [Route("vehicledetails/{id?}")]
        public ActionResult VehicleDetails(int id)
        {
            try
            {
                var result = vehicleRepo.VehicleDetails(id);

                return Ok(result);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "data retiving error");
            }
        }
    }
}