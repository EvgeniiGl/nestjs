import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {BookCommentsService} from "./book-comments.service";
import {BookComment, BookCommentSchema} from "./book-comment";
import { BookCommentsGateway } from './book-comments.gateway';

@Module({
    imports: [MongooseModule.forFeature([
        {name: BookComment.name, schema: BookCommentSchema},
    ])],
    exports: [BookCommentsService],
    providers: [BookCommentsService, BookCommentsGateway],
})

export class BookCommentsModule {
    
}