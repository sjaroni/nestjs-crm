import { Test, TestingModule } from '@nestjs/testing';
import { KundenController } from './kunden.controller';
import { KundenService } from './kunden.service';

describe('KundenController', () => {
  let controller: KundenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KundenController],
      providers: [KundenService],
    }).compile();

    controller = module.get<KundenController>(KundenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
