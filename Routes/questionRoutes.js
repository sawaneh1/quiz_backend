import express from "express";
import { getQuestions } from "../Controllers/QuestionController";

const router = express.Router();

router.get("/questions", getQuestions);
