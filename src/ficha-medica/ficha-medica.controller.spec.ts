import { Test, TestingModule } from '@nestjs/testing';
import { FichaMedicaController } from './ficha-medica.controller';
import { FichaMedicaService } from './ficha-medica.service';

describe('FichaMedicaController', () => {
  let controller: FichaMedicaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FichaMedicaController],
      providers: [FichaMedicaService],
    }).compile();

    controller = module.get<FichaMedicaController>(FichaMedicaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
