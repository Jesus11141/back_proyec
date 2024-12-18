// src/servicios/servicios.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servicio } from './service.entity';

@Injectable()
export class ServiciosService {
  constructor(
    @InjectRepository(Servicio)
    private readonly servicioRepository: Repository<Servicio>,
  ) {}

  findAll(): Promise<Servicio[]> {
    return this.servicioRepository.find({ relations: ['equipos', 'materiales', 'cliente'] });
  }

  findOne(id: number): Promise<Servicio> {
    return this.servicioRepository.findOne({ where: { id }, relations: ['equipos', 'materiales', 'cliente'] });
  }

  create(servicio: Servicio): Promise<Servicio> {
    return this.servicioRepository.save(servicio);
  }

  async remove(id: number): Promise<void> {
    await this.servicioRepository.delete(id);
  }
}
