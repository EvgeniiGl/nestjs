import {Controller, Get, HttpException, UseFilters} from '@nestjs/common';
import {BookService} from "./book.service";
import {BookDocument} from "./Models/Book";
import {HttpExceptionFilter} from "../exception/http.exception.filter";

@Controller('books')
export class BooksController {
    constructor(private bookService: BookService) {
    }

    @UseFilters(HttpExceptionFilter)
    @Get()
    public fetchAll(): Promise<BookDocument[]> {
        throw new HttpException('fdfdsf', 401)
        return this.bookService.fetchAll();
    }

}

