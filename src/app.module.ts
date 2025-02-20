import { Module } from "@nestjs/common";
import { Appcontroller } from "./app.controller";

@Module({
    controllers:[Appcontroller]
  })
  export class AppModule{}