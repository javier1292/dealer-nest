import { Injectable, NotFoundException } from '@nestjs/common';
import { json } from 'node:stream/consumers';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'toyota',
            model: 'corolla'
        },
        {
            id: 2,
            brand: 'honda',
            model: 'crv'
        },
        {
            id: 3,
            brand: 'jeep',
            model: 'cherokee'
        }
    ];

    findAll() {
        return this.cars;
    }
    findByid(id: number) {
        const car = this.cars.find(car => car.id === id);
        if(!car){
            throw new NotFoundException(`Carro no encontrado`);
        }
        return car;
    }

}
