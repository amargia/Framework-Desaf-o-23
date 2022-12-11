import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop()
    _id: string;
    @Prop()
    name: string;
    @Prop()
    description: string;
    @Prop()
    imageURL: string;
    @Prop()
    price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);