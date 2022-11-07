import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './DTO/create-car.dto';
import { UpdateCarDTO } from './DTO/update-car.dto';
@Controller('cars')
export class CarsController {

  constructor(
    private readonly carscervice: CarsService
  ) { }
  @Get()
  getallcars() {
    return this.carscervice.findAll();
  }

  @Get(':id')
  getCarsById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carscervice.findByid(id);
  }

  @Post()
  create(@Body() createCarDto: CreateCarDTO) {
    return this.carscervice.crete(createCarDto);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDTO
  ) {

    return this.carscervice.update(id, updateCarDto);

  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.carscervice.delete(id);
  }
}
