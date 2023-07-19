import {Injectable} from '@nestjs/common';
import {Book, BookDocument} from "./Models/Book";
import {InjectConnection, InjectModel, Prop} from "@nestjs/mongoose";
import {Connection, Model} from "mongoose";
import {CreateBookDto} from "./interfaces/dto/create.book.dto";

@Injectable()
export class BookService {

    private list: Book[] = [
        {
            title: '12345',
            authors: 'string',
            description: 'string',
            favorite: 'string',
            fileBook: 'string',
            fileCover: 'string',
            fileName: 'string',
        }
    ];

    constructor(
        @InjectModel(Book.name) private BookModel: Model<BookDocument>) {
    }

    public fetchAll(): Promise<BookDocument[]> {
        const books = this.BookModel.find({});

        return books;
    }

    public create(data: CreateBookDto): Promise<BookDocument> {
        const book = new this.BookModel(data);

        return book.save();
    }

    public async update(id: string, data: CreateBookDto): Promise<BookDocument> {
        let updatedBook = await this.BookModel.findByIdAndUpdate(id, data)

        return this.BookModel.findById(id);
    }

    public async delete(id: string): Promise<true> {
        const book = this.BookModel.findById(id);
        await this.BookModel.deleteOne(book)

        return true;
    }

    public add(book: Book) {
        this.list.push(book)
    }

    public getAll(): Book[] {
        return this.list
    }

}
