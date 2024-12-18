// src/servicios/servicio.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Cliente } from '../clientes/cliente.entity';
import { Equipo } from '../equipos/equipo.entity';
import { Material } from '../materiales/material.entity';

@Entity()
export class Servicio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: string;

  @Column()
  hora_entrada: string;

  @Column()
  hora_salida: string;

  @Column()
  descripcion_trabajo: string;

  @Column()
  trabajo_recomendado: string;

  @ManyToOne(() => Cliente, cliente => cliente.servicios)
  cliente: Cliente;

  @Column()
  representante_firma: string;

  @Column()
  cliente_firma: string;

  @OneToMany(() => Equipo, equipo => equipo.servicio)
  equipos: Equipo[];

  @OneToMany(() => Material, material => material.servicio)
  materiales: Material[];
}
