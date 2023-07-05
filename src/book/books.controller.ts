import {Controller, Get} from '@nestjs/common';
import {BookService} from "./book.service";
import {BookDocument} from "./Models/Book";

@Controller('books')
export class BooksController {
    constructor(private bookService: BookService) {
    }

    @Get()
    public fetchAll(): Promise<BookDocument[]> {
        return this.bookService.fetchAll();
    }

}

