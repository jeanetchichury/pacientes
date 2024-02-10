import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/PrismaService';
import { Prisma } from '@prisma/client';

@Injectable()
export class PacienteService {

  constructor(
    private prismaService:PrismaService
  ) {}

  async create(data: Prisma.PacienteCreateInput) {
    return await this.prismaService.paciente.create({
      data
    });
  }

  async findAll() {
    return await this.prismaService.paciente.findMany();
  }

  async findOne(id: string) {
    const paciente = await this.prismaService.paciente.findFirst({
      where:{
        id
      }
    });

    if (!paciente) {
      throw new BadRequestException('Paciente não encontrado.')
    }

    return paciente
  }

  async update(id: string, data: Prisma.PacienteUpdateInput) {
    await this.findOne(id)

    return await this.prismaService.paciente.update({
      where:{
        id
      },
      data
    });
  }

  async remove(id: string) {

    await this.findOne(id)

    return await this.prismaService.paciente.delete({
      where:{
        id
      }
    });

  }
}
