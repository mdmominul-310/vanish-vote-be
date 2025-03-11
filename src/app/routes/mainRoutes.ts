import { Router } from "express";
import { pollsRouter } from "../modules/polls/polls.routes";
import { commentsRouter } from "../modules/comments/comments.routes";

const router = Router();
const moduleRoutes = [
  {
    path: "/polls",
    route: pollsRouter,
  },

  {
    path: "/comments",
    route: commentsRouter,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
