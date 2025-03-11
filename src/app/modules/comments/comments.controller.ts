import catchAsync from "../../../helpers/catchAsync";
import CommentsService from "./comments.service";
import { Request, Response } from "express";

class CommentsController {
  constructor(private commentsService: CommentsService) {}

  create = catchAsync(async (req: Request, res: Response) => {
    const comment = await this.commentsService.createComment(req.body);
    this.commentsService.Response(res, {
      message: "Comment created successfully",
      data: comment,
      success: true,
    });
  });

  getComments = catchAsync(async (req: Request, res: Response) => {
    const comments = await this.commentsService.getComments(
      req.query as Record<string, string>
    );
    this.commentsService.Response(res, {
      message: "Comments fetched successfully",
      data: comments,
      success: true,
    });
  });

  getCommentById = catchAsync(async (req: Request, res: Response) => {
    const comment = await this.commentsService.getCommentById(req.params.id);
    this.commentsService.Response(res, {
      message: "Comment fetched successfully",
      data: comment,
      success: true,
    });
  });

  updateComment = catchAsync(async (req: Request, res: Response) => {
    const comment = await this.commentsService.updateComment(
      req.params.id,
      req.body
    );
    this.commentsService.Response(res, {
      message: "Comment updated successfully",
      data: comment,
      success: true,
    });
  });

  deleteComment = catchAsync(async (req: Request, res: Response) => {
    const comment = await this.commentsService.deleteComment(req.params.id);
    this.commentsService.Response(res, {
      message: "Comment deleted successfully",
      data: comment,
      success: true,
    });
  });
}

const commentsController = new CommentsController(new CommentsService());
export default commentsController;
