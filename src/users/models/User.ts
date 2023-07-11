import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

@Schema()
export class User {
    @Prop({required: true})
    public email: string;

    @Prop({})
    public firstName: string;
    
    @Prop({})
    public lastName: string;
    
    @Prop({required: true})
    public password: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
