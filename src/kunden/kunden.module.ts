import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kunden } from './entities/kunden.entity';
import { KundenService } from './kunden.service';
import { KundenController } from './kunden.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Kunden])],
  providers: [KundenService],
  controllers: [KundenController],
  exports: [TypeOrmModule, KundenService],
})
export class KundenModule {}
