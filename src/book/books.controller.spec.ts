import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import {BookService} from "./book.service";
import {getModelToken} from "@nestjs/mongoose";
import {Book, BookSchema} from "./Models/Book";

describe('BooksController', () => {
  let controller: BooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],  
      providers: [
        {
          provide: BookService,
          useValue: {
            fetchAll: jest.fn(),
          }
        },
        {
          provide: getModelToken(Book.name),
          useValue: BookSchema,
        },
      ],
    }).compile();

    controller = module.get<BooksController>(BooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
