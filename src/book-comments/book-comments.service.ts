import {Injectable} from '@nestjs/common';
import {Connection, Model} from "mongoose";
import {BookComment, BookCommentDocument} from "./book-comment";
import {CreateBookCommentDto} from "./dto/create.book-comment.dto";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class BookCommentsService {

    constructor(
        @InjectModel(BookComment.name) private BookComment: Model<BookCommentDocument>) {
    }

    public findAllBookComment(bookId: string): Promise<BookCommentDocument[]> {
        const comments = this.BookComment.find({bookId});

        return comments;
    }

    public create(data: CreateBookCommentDto): Promise<BookCommentDocument> {
        const comment = new this.BookComment(data);

        return comment.save();
    }

    public async update(id: string, data: CreateBookCommentDto): Promise<BookCommentDocument> {
        let updatedComment = await this.BookComment.findByIdAndUpdate(id, data)

        return this.BookComment.findById(id);
    }

    public async delete(id: string): Promise<true> {
        const comment = this.BookComment.findById(id);
        await this.BookComment.deleteOne(comment)

        return true;
    }
}
