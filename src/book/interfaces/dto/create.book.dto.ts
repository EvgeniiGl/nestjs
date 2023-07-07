import { IsString, IsDefined} from "class-validator";

export class CreateBookDto {
    @IsString()
    @IsDefined()
    title: string;

    @IsString()
    description?: string;
}