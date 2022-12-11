import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductosModule, MongooseModule.forRoot('mongodb+srv://Backend:Backend@cluster0.6xdsyrn.mongodb.net/?retryWrites=true&w=majority' || 'mongodb://localhost:27017/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
