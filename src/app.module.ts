import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {BookModule} from './book/book.module';
import {MongooseModule} from '@nestjs/mongoose';
import {ConfigModule} from "@nestjs/config";
import { BookController } from './book/book.controller';
import { BooksController } from './book/books.controller';

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.ME_CONFIG_MONGODB_CONNECT),
        BookModule
    ],
    controllers: [AppController, BookController, BooksController],
    providers: [AppService],
})

export class AppModule {}
