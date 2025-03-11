import { Router } from "express";
import commentsController from "./comments.controller";

const router: Router = Router();

router
  .route("/")
  .get(commentsController.getComments)
  .post(commentsController.create);
router
  .route("/:id")
  .get(commentsController.getCommentById)
  .patch(commentsController.updateComment)
  .delete(commentsController.deleteComment);

export { router as commentsRouter };
