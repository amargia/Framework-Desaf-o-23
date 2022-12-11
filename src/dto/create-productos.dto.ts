import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty()
    readonly _id: string;
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    readonly description: string;
    @ApiProperty()
    readonly imageURL: string;
    @ApiProperty()
    readonly price: number;
}