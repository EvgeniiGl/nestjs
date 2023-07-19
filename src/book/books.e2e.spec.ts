import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import {BookModule} from "./book.module";
import {BookService} from "./book.service";
import {AppModule} from "../app.module";

describe('BooksControllerE2E', () => {
    let app: INestApplication;
    let bookService = {fetchAll: ()=> ['test']}
    
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWNlNzE0MTdkYWNhYWQ5YTQzZWI5MyIsImVtYWlsIjoidGVzdDFAdGVzdHJ1LnJ1IiwiZmlyc3ROYW1lIjoiMWRlc2NyZmZkc2ZzIiwiaWF0IjoxNjg5NzUzMzQ2LCJleHAiOjE2ODk3NTM5NDZ9.nbuJa3xW6Rgv53R91BAwF_AX50IbFGS-Mj2uj1bWdF4'
    
    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        })
            .overrideProvider(BookService)
            .useValue(bookService)
            .compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/books (GET)', () => {
        return request(app.getHttpServer())
            .get('/books')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
            .expect(bookService.fetchAll);
    });
});