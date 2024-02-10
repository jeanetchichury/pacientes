import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FichaMedicaService } from './ficha-medica.service';
import { Prisma } from '@prisma/client';

@Controller('ficha-medica')
export class FichaMedicaController {
  constructor(private readonly fichaMedicaService: FichaMedicaService) {}

  @Post()
  create(@Body() createFichaMedicaDto: Prisma.FichaMedicaUncheckedCreateInput) {
    return this.fichaMedicaService.create(createFichaMedicaDto);
  }

  @Get()
  findAll() {
    return this.fichaMedicaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fichaMedicaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFichaMedicaDto: Prisma.FichaMedicaUncheckedUpdateInput) {
    return this.fichaMedicaService.update(id, updateFichaMedicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fichaMedicaService.remove(id);
  }
}
