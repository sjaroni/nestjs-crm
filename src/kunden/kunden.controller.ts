import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { KundenService } from './kunden.service';
import { CreateKundeDto } from './dto/create-kunde.dto';
import { UpdateKundeDto } from './dto/update-kunde.dto';
import { Kunde } from './entities/kunde.entity';

@Controller('kunden')
export class KundenController {
  constructor(private readonly kundenService: KundenService) {}

  @Post()
  create(@Body() createKundeDto: CreateKundeDto) {
    return this.kundenService.create(createKundeDto);
  }

  @Get()
  findAll() {
    return this.kundenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Kunde | null> {

    try {
      return this.kundenService.findOne(id);      
    } catch (error) {
      throw new NotFoundException('Kunde nicht gefunden', {
        cause: new Error(),
        description: 'Weiterer Fehlertext',
      }); // 400 Error
    }

  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKundeDto: UpdateKundeDto) {
    return this.kundenService.update(+id, updateKundeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kundenService.remove(+id);
  }
}
