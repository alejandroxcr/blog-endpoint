import { Request, Response, Router } from "express";
import { getAll, getById } from "../services/posts.service";

const router = Router();

/**
 * @openapi
 * /api/posts:
 *  get:
 *    tags:
 *      - Posts
 *    summary: Get all posts.
 *    responses:
 *      200:
 *        description: Returns all the posts available.
 */
router.get("/", (_, res: Response) => {
  const data = getAll();
  res.json(data);
});

/**
 * @openapi
 * /api/posts/{id}:
 *  get:
 *    tags:
 *      - Posts
 *    summary: Get post by id.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The id of the post.
 *    responses:
 *      200:
 *        description: Returns a post by id.
 */
router.get("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id || 0);
  const data = getById(id);
  res.json(data);
});

export default router;
