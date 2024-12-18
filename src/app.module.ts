// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ServiciosModule } from './servicios/servicios.module';
import { ClientesModule } from './clientes/clientes.module';
import { EquiposModule } from './equipos/equipos.module';
import { MaterialesModule } from './materiales/materiales.module';
import { Servicio } from './servicios/service.entity';
import { Cliente } from './clientes/cliente.entity';
import { Equipo } from './equipos/equipo.entity';
import { Material } from './materiales/material.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'back_nest_angular',
      entities: [Servicio, Cliente, Equipo, Material],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    ServiciosModule,
    ClientesModule,
    EquiposModule,
    MaterialesModule,
  ],
})
export class AppModule {}
