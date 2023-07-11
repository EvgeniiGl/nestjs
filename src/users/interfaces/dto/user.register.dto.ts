import {IsString, IsDefined, IsEmail} from "class-validator";

export class UserRegisterDto {
    @IsEmail()
    @IsDefined()
    email: string;

    @IsString()
    @IsDefined()
    firstName: string;
    
    @IsString()
    @IsDefined()
    password: string;
}