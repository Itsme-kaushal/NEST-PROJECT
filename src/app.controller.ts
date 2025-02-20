import { Controller, Get } from "@nestjs/common";

@Controller()
// controller decorator is used to mark a class as a controller
// it is a class that is responsible for handling incoming http requests, processing them, and returning the response,routing the request to the appropriate service


export class Appcontroller{
  //get decorator is used to define a route handler for get requests takes a string argument that defines the route that is relative to the controller
  @Get()
  getRootRoute(){
    return "hi from scratch app"
  }

}