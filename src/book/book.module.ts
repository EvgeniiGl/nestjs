import {Module} from '@nestjs/common';
import {BookService} from './book.service';
import {BookController} from './book.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Book, BookSchema} from "./Models/Book";

@Module({
    imports: [MongooseModule.forFeature([
        {name: Book.name, schema: BookSchema},
    ])],
    exports: [BookService],
    providers: [BookService],
    controllers: [BookController]
})

export class BookModule {
}
