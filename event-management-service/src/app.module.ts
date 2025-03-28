import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { StaffEventModule } from './staff-event/staff-event.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffEvent } from './staff-event/entities/staff-event.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'auction_event_db',
      synchronize: true,
      entities: [Event, StaffEvent]
    }),
    EventModule,
    StaffEventModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
