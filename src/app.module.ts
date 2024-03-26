import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import {
  SPFileAccessService,
  LibSharepointUtilityModule,
  SPTableAccessService,
} from '@elttechnology/lib-sharepoint-utility';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    LibSharepointUtilityModule,
  ],
  controllers: [AppController],
  providers: [AppService, SPFileAccessService, SPTableAccessService],
})
export class AppModule {}
