import {Body, Controller, Get, Post} from '@nestjs/common';
import {BookService} from "./book.service";
import {BookDocument} from "./Models/Book";
import {CreateBookDto} from "./interfaces/dto/create.book.dto";

@Controller('books')
export class BooksController {
    constructor(private bookService: BookService) {
    }

    @Get()
    public fetchAll(): Promise<BookDocument[]> {
        return this.bookService.fetchAll();
    }

}

