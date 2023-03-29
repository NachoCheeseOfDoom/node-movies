import { Request, Response } from "express";
import mongoose from "mongoose";
import Movies from "../interfaces/movies";

const getAll = async (req: Request, res: Response) => {
  // TODO serach in DB fr all movies
  const movies = await Movies.find().exec();
  return res.status(200).json({
    message: "movies found",
    data: movies
  });
}

const get = async (req: Request, res: Response) => {
  // TODO serach in DB fr all movies
  const id = req.params.id;
  const movie = await Movies.findById(id).exec();
  return res.status(200).json({
    message: "movie found:",
    data: movie,
  });
}

const create = async (req: Request, res: Response) => {
  // TODO storage movie into db
  const { title, year } = req.body;
  if (title === '' || year === '' || !title || !year) {
    res.status(400).json({
      message: "Must have title and year"
    });
    return;
  }

  const movie = new Movies({
    _id: new mongoose.Types.ObjectId(),
    title: title,
    year: year,
  });


  const result = await movie.save();


  return res.status(201).json({
    message: "Movie added correctly",
    data: {
      title,
      year,
      id: result.id,
    }
  });
}


const update = async (req: Request, res: Response) => {
  // TODO find by id and update in db
  const id = req.params.id;
  const { title, year } = req.body;
  if (title === '' || year === '' || !title || !year) {
    res.status(400).json({
      message: "Must have title and year"
    });
    return;
  }
  const movie = await Movies.findById(id).exec();
  if (!movie) {
    res.status(400).json({
      message: "The movie you are trying to update doesn't exist"
    });
    return;
  }
  movie.title = title;
  movie.year = year;
  await movie.save();
  return res.status(200).json({
    message: "Movie updated correctly!",
    data: movie
  });
}

const remove = async (req: Request, res: Response) => {
  // TODO find by id and update in db
  const id = req.params.id;
  await Movies.findByIdAndRemove(id).exec();
  return res.status(200).json({
    message: "movie deleted correctly",
  });
}

export default { getAll, get, create, update, remove };