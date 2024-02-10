import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/PrismaService';
import { PacienteService } from 'src/paciente/paciente.service';

@Injectable()
export class FichaMedicaService {

  constructor(
    private paciente:PacienteService,
    private prismaService:PrismaService
  ){}

  async create(data: Prisma.FichaMedicaUncheckedCreateInput) {
    await this.paciente.findOne(data.pacienteId)

    return this.prismaService.fichaMedica.create({
      data,
    });

  }

  async findAll() {
    return await this.prismaService.fichaMedica.findMany();
  }

  async findOne(id: string) {
    const fichaMedica = this.prismaService.fichaMedica.findFirst({
      where:{
        id,
      }
    })

    if (!fichaMedica){
      throw new BadRequestException('Ficha médica não encontrada.')
    }

    return fichaMedica
  }

  async update(id: string, data: Prisma.FichaMedicaUncheckedUpdateInput) {
    await this.findOne(id)
    
    return await this.prismaService.fichaMedica.update({
      where:{
        id,
      },
      data,
    });
  }

  async remove(id: string) {
    await this.findOne(id)
    
    return await this.prismaService.fichaMedica.delete({
      where:{
        id
      }
    });
  }
}
