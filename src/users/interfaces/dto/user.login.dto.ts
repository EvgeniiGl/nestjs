import {IsString, IsDefined, IsEmail} from "class-validator";

export class UserLoginDto {
    @IsEmail()
    @IsDefined()
    email: string;
    
    @IsString()
    @IsDefined()
    password: string;
}