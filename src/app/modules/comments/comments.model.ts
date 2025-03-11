import { model, Schema } from "mongoose";
import { CommentsModel, IComments } from "./comments.interface";

const commentSchema = new Schema<IComments, CommentsModel>(
  {
    id: { type: String },
    comment: { type: String, required: true },
    postId: { type: String, required: true },
  },
  { timestamps: true }
);

commentSchema.pre("save", function (next) {
  const comment = this as IComments;
  if (!comment.id) {
    comment.id = this._id;
  }
  next();
});

const Comments = model<IComments, CommentsModel>("Comments", commentSchema);

export default Comments;
