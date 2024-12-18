import { Module } from '@nestjs/common';
import { EquiposService } from './equipos.service';
import { EquiposController } from './equipos.controller';

@Module({
  providers: [EquiposService],
  controllers: [EquiposController]
})
export class EquiposModule {}
