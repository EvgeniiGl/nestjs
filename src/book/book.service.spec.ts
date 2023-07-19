import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book.service';
import {getModelToken, MongooseModule} from "@nestjs/mongoose";
import {Book, BookSchema} from "./Models/Book";
import {BookController} from "./book.controller";

describe('BookService', () => {
  let service: BookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookService,
        {
          provide: getModelToken(Book.name),
          useValue: BookSchema,
        },
      ],
    }).compile();

    service = module.get<BookService>(BookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('root', () => {
    it('should add a book', function () {
      const book = new Book()
      service.add(book)
      const books = service.getAll()
      expect(books).toHaveLength(1)
    });
  })
  
});
