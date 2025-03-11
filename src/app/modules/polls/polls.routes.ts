import { Router } from "express";
import pollsController from "./polls.controller";

const router: Router = Router();

router.route("/").get(pollsController.getPolls).post(pollsController.create);
router
  .route("/:id")
  .get(pollsController.getPollById)
  .patch(pollsController.updatePoll)
  .delete(pollsController.deletePoll);

export { router as pollsRouter };
