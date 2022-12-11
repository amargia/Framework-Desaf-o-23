import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from '../schema/product.schema';
import { CreateProductDto } from '../dto/create-productos.dto';

import { Productos } from '../interfaces/productos/productos.interface';

@Injectable()
export class ProductosService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

    async create(createProductDto: CreateProductDto): Promise<Product> {
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct.save();
    }

    async findAll(): Promise<Product[]> {
        return this.productModel.find().exec();
    }

    async delete(_id: string): Promise<Product> {
        return this.productModel.findByIdAndRemove(_id);
    }

    async update(_id: string, product: Product): Promise<Product> {
        return this.productModel.findByIdAndUpdate(_id, product, { new: true });
    }

    // private readonly productos: Productos[] = [
    //     {
    //         id: 1,
    //         name: 'Producto 1',
    //         description: 'Descripción del producto 1',
    //         imageURL: 'https://picsum.photos/200/300',
    //         price: 100,
    //     },
    //     {
    //         id: 2,
    //         name: 'Producto 2',
    //         description: 'Descripción del producto 2',
    //         imageURL: 'https://picsum.photos/200/300',
    //         price: 200,
    //     },
    // ];

//     delete(producto: Productos): string {
//         this.productos.forEach((item, index) => {
//             if (item.id === producto.id) {
//                 this.productos.splice(index, 1);
//             }
//         });
//         return 'Producto eliminado';
//     }

// //update by id product function
//     update(producto: Productos): string {
//         this.productos.forEach((item, index) => {
//             if (item.id === producto.id) {
//                 this.productos[index] = producto;
//             }
//         });
//         return 'Producto actualizado';
//     }

//     create(producto: Productos): string {
//         this.productos.push(producto);
//         return 'Producto creado';
//     }

//     findAll(): Productos[] {
//         return this.productos;
//     }
}
