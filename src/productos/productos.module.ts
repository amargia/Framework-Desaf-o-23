import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '../schema/product.schema'
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  controllers: [ProductosController],
  providers: [ProductosService]
})
export class ProductosModule {}