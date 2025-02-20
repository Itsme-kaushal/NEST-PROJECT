import { Controller,Get,Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

// first import the controller decorator from nestjs/common
// then import the get decorator from nestjs/common
// then import the module decorator from nestjs/common

@Controller()
// controller decorator is used to mark a class as a controller
// it is a class that is responsible for handling incoming http requests, processing them, and returning the response,routing the request to the appropriate service

class Appcontroller{
  //get decorator is used to define a route handler for get requests takes a string argument that defines the route that is relative to the controller
  @Get()
  getRootRoute(){
    return "hi from scratch app"
  }

}
// module decorator is used to define a module
// a module is a class that groups related component such as controllers, services, and providers
@Module({
  controllers:[Appcontroller]
})
class AppModule{}
//define a bootstrap function that creates an application instance and listens on port 3000
 async function bootstrap() {
  //nestfactory is a class that exposes a set of static methods that allow creating an application instance import it from nestjs/core
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
//call the bootstrap function
bootstrap();