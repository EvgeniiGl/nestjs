import {IsDefined, IsEmail, IsString} from "class-validator";

export class UpdateBookDto {

    @IsEmail()
    @IsDefined()
    title: string;

    @IsString()
    description?: string;
}