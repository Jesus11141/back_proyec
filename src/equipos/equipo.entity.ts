// src/equipos/equipo.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Servicio } from '../servicios/service.entity';

@Entity()
export class Equipo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  area: string;

  @Column()
  marca: string;

  @Column()
  modelo: string;

  @Column()
  numero_serie: string;

  @Column()
  tipo: string;

  @Column()
  capacidad: string;

  @Column()
  refrigerante: string;

  @Column()
  psi: string;

  @Column()
  voltios: string;

  @Column()
  amperios: string;

  @ManyToOne(() => Servicio, servicio => servicio.equipos)
  servicio: Servicio;
}
