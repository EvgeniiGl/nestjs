import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {BookModule} from './book/book.module';
import {MongooseModule} from '@nestjs/mongoose';
import {ConfigModule} from "@nestjs/config";
import { BookController } from './book/book.controller';
import { BooksController } from './book/books.controller';
import { GithubService } from './github/github.service';
import {HttpModule} from "@nestjs/axios";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BookCommentsModule } from './book-comments/book-comments.module';
import {BookCommentsGateway} from "./book-comments/book-comments.gateway";

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.ME_CONFIG_MONGODB_CONNECT),
        BookModule,
        HttpModule,
        AuthModule,
        UsersModule,
        BookCommentsModule,
    ],
    controllers: [AppController, BookController, BooksController],
    providers: [AppService, GithubService, BookCommentsGateway],
})

export class AppModule {}
