import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

constructor(
  private readonly carscervice: CarsService
){}
  @Get()
  getallcars() {
    return this.carscervice.findAll();
  }

  @Get(':id')
  getCarsById(@Param('id', ParseIntPipe ) id:number) {
    return this.carscervice.findByid(id);
  } 
}
