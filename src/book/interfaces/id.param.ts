import {IsDefined, IsNotEmpty, IsString} from "class-validator";

export class IdParam {
    @IsString()
    @IsDefined()
    id: string;
}