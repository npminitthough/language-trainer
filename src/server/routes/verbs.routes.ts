import { Router } from "express";
import { getVerbs } from "../controllers/verbs.controller";

const router = Router();

router.get("/", getVerbs)

export default router;
    