import express from "express";
import { addMovie, getAllMovie, getMovie } from "../Controller/MovieController.js";

const router= express.Router();


router.get('/getallmovie',getAllMovie);
router.post('/addmovie',addMovie);
router.get('/:id',getMovie)

export default router;