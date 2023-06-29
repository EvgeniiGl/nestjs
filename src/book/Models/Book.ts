import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

@Schema()
export class Book {
    @Prop({required: true})
    public title: string;

    @Prop()
    public authors: string;

    @Prop()
    public description: string;

    @Prop()
    public favorite: string;

    @Prop()
    public fileBook: string;

    @Prop()
    public fileCover: string;

    @Prop()
    public fileName: string;
}

export type BookDocument = Book & Document;

export const BookSchema = SchemaFactory.createForClass(Book);
