// src/materiales/material.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Servicio } from '../servicios/service.entity';

@Entity()
export class Material {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cantidad: number;

  @Column()
  tipo_material: string;

  @ManyToOne(() => Servicio, servicio => servicio.materiales)
  servicio: Servicio;
}
