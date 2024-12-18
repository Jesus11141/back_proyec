// src/servicios/servicios.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiciosService } from './services.service';
import { ServiciosController } from './services.controller';
import { Servicio } from './service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Servicio])],
  providers: [ServiciosService],
  controllers: [ServiciosController],
})
export class ServiciosModule {}
