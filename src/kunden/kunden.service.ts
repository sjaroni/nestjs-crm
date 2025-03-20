import { Injectable } from '@nestjs/common';
import { Kunden } from './entities/kunden.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKundenDto } from './dto/create-kunden.dto';
import { UpdateKundenDto } from './dto/update-kunden.dto';

@Injectable()
export class KundenService {

  constructor(
    @InjectRepository(Kunden) private kundenRepo: Repository<Kunden>,
  ){}

  create(createKundenDto: CreateKundenDto) {
    return 'This action adds a new kunden';
  }

  findAll(): Promise<Kunden[]> {
    return this.kundenRepo.find();
    // return `This action returns all kunden`;

  }

  findOne(id: number) {
    return `This action returns a #${id} kunden`;
  }

  update(id: number, updateKundenDto: UpdateKundenDto) {
    return `This action updates a #${id} kunden`;
  }

  remove(id: number) {
    return `This action removes a #${id} kunden`;
  }
}
