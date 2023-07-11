import {Controller, Get, HttpException, UseFilters, UseGuards} from '@nestjs/common';
import {BookService} from "./book.service";
import {BookDocument} from "./Models/Book";
import {HttpExceptionFilter} from "../exception/http.exception.filter";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('books')
export class BooksController {
    constructor(private bookService: BookService) {
    }

    @UseGuards(JwtAuthGuard)
    @UseFilters(HttpExceptionFilter)
    @Get()
    public fetchAll(): Promise<BookDocument[]> {
        return this.bookService.fetchAll();
    }

}

