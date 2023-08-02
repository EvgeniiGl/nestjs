import {IsString, IsDefined, IsEmail} from "class-validator";

export class CreateBookCommentDto {
    @IsDefined()
    bookId: string;

    @IsString()
    comment: string;
}