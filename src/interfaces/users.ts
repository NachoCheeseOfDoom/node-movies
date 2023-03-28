import mongoose, { Schema } from "mongoose";
import { User } from "../models/users";

const USerSchema: Schema = new Schema({
        username: {type: String, require: true},
        password: {type: String, require: true}
},{
    timestamps: true
});

export default mongoose.model<User>('Users', USerSchema);