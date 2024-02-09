import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';

@Module({
  imports: [PacienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
