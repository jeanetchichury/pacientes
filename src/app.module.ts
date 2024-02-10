import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';
import { FichaMedicaModule } from './ficha-medica/ficha-medica.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PacienteModule, FichaMedicaModule],
})
export class AppModule {}
