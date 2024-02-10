import { Module } from '@nestjs/common';
import { FichaMedicaService } from './ficha-medica.service';
import { FichaMedicaController } from './ficha-medica.controller';
import { PrismaService } from 'src/PrismaService';
import { PacienteService } from 'src/paciente/paciente.service';

@Module({
  controllers: [FichaMedicaController],
  providers: [FichaMedicaService, PrismaService, PacienteService],
})
export class FichaMedicaModule {}
