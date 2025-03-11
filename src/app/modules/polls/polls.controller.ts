import catchAsync from "../../../helpers/catchAsync";
import PollsService from "./polls.service";
import { Request, Response } from "express";

class PollsController {
  constructor(private pollsService: PollsService) {}

  create = catchAsync(async (req: Request, res: Response) => {
    const poll = await this.pollsService.createPoll(req.body);
    this.pollsService.Response(res, {
      message: "Poll created successfully",
      data: poll,
      success: true,
    });
  });

  getPolls = catchAsync(async (req: Request, res: Response) => {
    const polls = await this.pollsService.getPolls(
      req.query as Record<string, string>
    );
    this.pollsService.Response(res, {
      message: "Polls fetched successfully",
      data: polls,
      success: true,
    });
  });

  getPollById = catchAsync(async (req: Request, res: Response) => {
    const poll = await this.pollsService.getPollById(req.params.id);
    this.pollsService.Response(res, {
      message: "Poll fetched successfully",
      data: poll,
      success: true,
    });
  });

  updatePoll = catchAsync(async (req: Request, res: Response) => {
    const poll = await this.pollsService.updatePoll(req.params.id, req.body);
    this.pollsService.Response(res, {
      message: "Poll updated successfully",
      data: poll,
      success: true,
    });
  });

  deletePoll = catchAsync(async (req: Request, res: Response) => {
    const poll = await this.pollsService.deletePoll(req.params.id);
    this.pollsService.Response(res, {
      message: "Poll deleted successfully",
      data: poll,
      success: true,
    });
  });
}

const pollsController = new PollsController(new PollsService());
export default pollsController;
