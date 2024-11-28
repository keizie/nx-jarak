import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from '../comment/comment.module';
import { AppConfigModule } from '../config/config.module';

@Module({
  imports: [CommentModule, AppConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
