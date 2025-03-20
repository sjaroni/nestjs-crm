import { Injectable, NotFoundException } from '@nestjs/common';
import { Kunde } from './entities/kunde.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKundeDto } from './dto/create-kunde.dto';
import { UpdateKundeDto } from './dto/update-kunde.dto';

@Injectable()
export class KundenService {
  constructor(
    @InjectRepository(Kunde) private kundeRepo: Repository<Kunde>,
  ) {}

  create(createKundeDto: CreateKundeDto) {
    return 'This action adds a new kunden';
  }

  // GET /kunden --> []
  findAll(): Promise<Kunde[]> {
    return this.kundeRepo.find();
    // return `This action returns all kunden`;
  }

  // GET /kunden/:id --> { ... }
  async findOne(id: number): Promise<Kunde | null> {
    const kunde = await this.kundeRepo.findOne({ where: { id } });
  
    if (!kunde) {
      throw new NotFoundException(`Kunde mit ID ${id} nicht gefunden`);
    }
  
    return kunde;
  }
  

  update(id: number, updateKundeDto: UpdateKundeDto) {
    return `This action updates a #${id} kunden`;
  }

  remove(id: number) {
    return `This action removes a #${id} kunden`;
  }
}
