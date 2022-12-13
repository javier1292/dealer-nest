import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

  private _brands: Brand[] = [
/*     {
      id: uuid(),
      name: 'toyota',
      createdAt: new Date().getTime()
    } */
  ]

  create(createBrandDto: CreateBrandDto) {
    const {name }  = createBrandDto;
    const brand : Brand = {
      id:uuid(),
      name:name.toLocaleLowerCase(),
      createdAt: new Date().getTime()

    }

    this._brands.push(brand);
    return brand;
  }

  findAll() {
    return this._brands;
  }

  findOne(id: string) {
    const brand = this._brands.find(brand => brand.id === id);
    if(!brand) throw new NotFoundException(`${id}`)

    return brand ;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let branDB = this.findOne(id)
    this._brands = this._brands.map(brand =>{
      if (brand.id === id){
        branDB.updateddAt = new Date().getTime();
        branDB = {
          ...branDB, ...updateBrandDto

        }
        return branDB;
      }
      return brand;
    })

  }

  remove(id: string) {
    this._brands = this._brands.filter(brand => brand.id !== id);
    
  }

  
  fillBrandsSeed(brands: Brand[]){

    this._brands = brands;
}
}
