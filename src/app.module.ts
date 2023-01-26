import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QrcodeController } from './qrcode/qrcode.controller';

@Module({
  imports: [],
  controllers: [AppController, QrcodeController],
  providers: [AppService],
})
export class AppModule {}
