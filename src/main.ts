import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// first import the controller decorator from nestjs/common
// then import the get decorator from nestjs/common
// then import the module decorator from nestjs/common


// module decorator is used to define a module
// a module is a class that groups related component such as controllers, services, and providers


//define a bootstrap function that creates an application instance and listens on port 3000
 async function bootstrap() {
  //nestfactory is a class that exposes a set of static methods that allow creating an application instance import it from nestjs/core
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
//call the bootstrap function
bootstrap();