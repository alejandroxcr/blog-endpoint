import { Request, Response, Router } from "express";

const router = Router();

type HelloResponse = {
  message: string;
};

/**
 * @openapi
 * /api/hello:
 *  get:
 *    tags:
 *      - Main
 *    summary: Hello back
 *    responses:
 *      200:
 *        description: Server says hello
 */
router.get("/", (req: Request, res: Response) => {
  const data: HelloResponse = { message: "Hello world from node!" };
  res.json(data);
});

export default router;
