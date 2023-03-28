import mongoose, { Schema } from "mongoose";
import { Movie } from "../models/movies";

const MoviesSchema: Schema = new Schema({
        title: {type: String, require: true},
        year: {type: Number, require: true}
},{
    timestamps: true
});

export default mongoose.model<Movie>('Movie', MoviesSchema);