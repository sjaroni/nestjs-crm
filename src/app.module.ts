import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KundenModule } from './kunden/kunden.module';
import { KundenService } from './kunden/kunden.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kunde } from './kunden/entities/kunde.entity';

@Module({
  imports: [KundenModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'crm',
      password: 'crm',
      database: 'crm',
      entities: [Kunde],
      synchronize: false,
    }),
    KundenModule,
  ],
  controllers: [AppController],
  providers: [AppService, KundenService],
})
export class AppModule {}
