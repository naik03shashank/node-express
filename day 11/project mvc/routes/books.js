import express from 'express';

import { getBooks } from '../controller/bookscontroller.js';

const router = express.Router();

router.get('/', getBooks);

export default router;