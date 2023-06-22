import {Injectable} from '@nestjs/common';
import {Book} from "./Models/Book";

@Injectable()
export class BookService {

    private readonly books: Book[] = [
        {
            authors: 'string;',
            description: 'string;',
            favorite: 'string;',
            fileBook: 'string;',
            fileCover: 'string;',
            fileName: 'string;',
            title: 'string;',
        }
    ];

    findAll(): Promise<Book[]> {
        return new Promise((resolve, reject) => {
            resolve(this.books);
        });
    }
}
