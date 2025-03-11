import { Model } from "mongoose";

export type IComments = {
  _id?: string;
  id: string;
  comment: string;
  postId: string;
};

export type CommentsModel = Model<IComments>;
