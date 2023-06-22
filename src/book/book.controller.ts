import { Controller, Get} from '@nestjs/common';
import {BookService} from "./book.service";
import {Book} from "./Models/Book";

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) {}

    @Get()
    findAll(): Promise<Book[]> {
        return this.bookService.findAll();
    }
}
