import {Body, Param, Controller, Delete, Put, Post, UsePipes, ParseIntPipe} from '@nestjs/common';
import {BookService} from "./book.service";
import {Book, BookDocument} from "./Models/Book";
import {CreateBookDto} from "./interfaces/dto/create.book.dto";
import {UpdateBookDto} from "./interfaces/dto/update.book.dto";
import {IdParam} from "./interfaces/id.param";

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) {
    }

    @Post()
    public create(@Body() body: CreateBookDto): Promise<BookDocument> {
        return this.bookService.create(body);
    }

    @Put(':id')
    public update(@Body() body: UpdateBookDto, @Param() params: IdParam): Promise<BookDocument> {
        return this.bookService.update(params.id, body);
    }

    @Delete(':id')
    public async delete(@Param() params: any): Promise<BookDocument[]> {
        await this.bookService.delete(params.id);

        return this.bookService.fetchAll();
    }

}
