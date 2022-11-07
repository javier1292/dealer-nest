import { BadRequestException, Injectable, NotFoundException, Delete } from '@nestjs/common';
import { json } from 'node:stream/consumers';
import { Car } from '../cars/interfaces/cars.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDTO, UpdateCarDTO } from './DTO/index';
import { error } from 'node:console';
@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'toyota',
            model: 'corolla'
        },
        {
            id: uuid(),
            brand: 'honda',
            model: 'crv'
        },
        {
            id: uuid(),
            brand: 'jeep',
            model: 'cherokee'
        }
    ];

    findAll() {
        return this.cars;
    }

    crete(createCarDto: CreateCarDTO) {
        const car: Car = {
            id: uuid(),
            ...createCarDto
        }
        this.cars.push(car)
        return car;
    }
    update(id: string, updatecarDto: UpdateCarDTO) {
        let cardB = this.findByid(id);

        if (updatecarDto.id && updatecarDto.id !== id)
            throw new BadRequestException('Car id is not valid ')

        this.cars = this.cars.map(car => {
            if (car.id === id) {
                cardB = {
                    ...cardB,
                    ...updatecarDto,
                    id
                }
                return cardB;
            }
            return car;
        })
        return cardB;
    }

    delete(id:string){
        const cardB = this.findByid(id);
        this.cars = this.cars.filter(car => car.id !== id );
    }
    findByid(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) {
            throw new NotFoundException(`Carro no encontrado`);
        }
        return car;
    }

}
