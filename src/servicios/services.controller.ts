// src/servicios/servicios.controller.ts
import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ServiciosService } from './services.service';
import { Servicio } from './service.entity';

@Controller('servicios')
export class ServiciosController {
  constructor(private readonly serviciosService: ServiciosService) {}

  @Get()
  findAll(): Promise<Servicio[]> {
    return this.serviciosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Servicio> {
    return this.serviciosService.findOne(id);
  }

  @Post()
  create(@Body() servicio: Servicio): Promise<Servicio> {
    return this.serviciosService.create(servicio);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.serviciosService.remove(id);
  }
}
