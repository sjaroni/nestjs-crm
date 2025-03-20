import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kunde } from './entities/kunde.entity';
import { KundenService } from './kunden.service';
import { KundenController } from './kunden.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Kunde])],
  providers: [KundenService],
  controllers: [KundenController],
  exports: [TypeOrmModule, KundenService],
})
export class KundenModule {}
