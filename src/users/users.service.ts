import {Injectable} from '@nestjs/common';
import {UserRegisterDto} from "./interfaces/dto/user.register.dto";
import {User, UserDocument} from "./models/User";
import {InjectConnection, InjectModel} from "@nestjs/mongoose";
import {Connection, Model, Types} from "mongoose";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private UserModel: Model<UserDocument>,
        @InjectConnection() private connection: Connection) {
    }

    async findOne(id: string): Promise<UserDocument | undefined> {
        const user = await this.UserModel.findOne({_id: id});
        console.log('log--findOne', '\n',
            'id--', id, '\n',
            'user--', user, '\n',
        )
        
        return user;
    }

    async findByEmail(email: string): Promise<UserDocument | undefined> {
        const user = this.UserModel.findOne({email: email});

        return user;
    }

    public register(data: UserRegisterDto): Promise<UserDocument> {
        const user = new this.UserModel(data);

        return user.save();
    }
}
