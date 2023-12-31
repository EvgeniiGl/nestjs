import {Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "./models/User";

@Module({
    imports: [MongooseModule.forFeature([
        {name: User.name, schema: UserSchema},
    ])],
    exports: [UsersService],
    providers: [UsersService],
})

export class UsersModule {
}
