import { Test, TestingModule } from '@nestjs/testing';
import { FichaMedicaService } from './ficha-medica.service';

describe('FichaMedicaService', () => {
  let service: FichaMedicaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FichaMedicaService],
    }).compile();

    service = module.get<FichaMedicaService>(FichaMedicaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
