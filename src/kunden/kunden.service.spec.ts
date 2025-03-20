import { Test, TestingModule } from '@nestjs/testing';
import { KundenService } from './kunden.service';

describe('KundenService', () => {
  let service: KundenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KundenService],
    }).compile();

    service = module.get<KundenService>(KundenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
