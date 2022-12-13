import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';


@Injectable()
export class SeedService {
 
  constructor(
    private readonly CarsService:CarsService,
    private readonly brandService:BrandsService,
  ){}
  runSeed() {

    this.CarsService.fillCarsSeed(CARS_SEED);
    this.brandService.fillBrandsSeed(BRANDS_SEED);
    return 'Seed successfully ';
  }

 
}
