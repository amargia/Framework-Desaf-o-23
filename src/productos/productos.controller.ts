import { Controller, Post, Get, Body, Patch, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Productos } from '../interfaces/productos/productos.interface';
import { CreateProductDto } from '../dto/create-productos.dto';
import { Param } from '@nestjs/common/decorators';

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) {}

    //add Get function
    @Get()
    async findAll(): Promise<Productos[]> {
        return this.productosService.findAll();
    }

    //add Post function
    @Post()
    async create(@Body() producto: CreateProductDto) {
        this.productosService.create(producto);
    }

    //add Patch function
    @Patch(':_id')
    async update(@Param('_id') _id: string , @Body() producto: CreateProductDto) {
        this.productosService.update(_id, producto);
    }

    //add Delete function
    @Delete(':_id')
    async delete(@Param('_id') _id: string) {
        this.productosService.delete(_id);
    }



    // //add Delete function
    // @Delete()
    // async delete(@Body() producto: CreateProductDto) {
    //     this.productosService.delete(producto);
    // }

    // //add Put function
    // @Put()
    // async update(@Body() producto: CreateProductDto) {
    //     this.productosService.update(producto);
    // }

    // @Post()
    // async create(@Body() producto: CreateProductDto) {
    //     this.productosService.create(producto);
    // }

    // @Get()
    // async findAll(): Promise<Productos[]> {
    //     return this.productosService.findAll();
    // }
}
