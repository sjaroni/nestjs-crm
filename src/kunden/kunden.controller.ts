import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KundenService } from './kunden.service';
import { CreateKundenDto } from './dto/create-kunden.dto';
import { UpdateKundenDto } from './dto/update-kunden.dto';

@Controller('kunden')
export class KundenController {
  constructor(private readonly kundenService: KundenService) {}

  @Post()
  create(@Body() createKundenDto: CreateKundenDto) {
    return this.kundenService.create(createKundenDto);
  }

  @Get()
  findAll() {
    return this.kundenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kundenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKundenDto: UpdateKundenDto) {
    return this.kundenService.update(+id, updateKundenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kundenService.remove(+id);
  }
}
