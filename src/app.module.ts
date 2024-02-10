import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PacienteModule],
})
export class AppModule {}
