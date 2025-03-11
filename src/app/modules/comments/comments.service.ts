import ServiceModel from "../../../helpers/serviceModel";
import { IComments } from "./comments.interface";
import Comments from "./comments.model";

class CommentsService extends ServiceModel {
  COMMENT: typeof Comments;
  constructor() {
    super();
    this.COMMENT = Comments;
  }
  public async createComment(data: IComments): Promise<IComments> {
    return this.COMMENT.create(data);
  }

  public async getComments(
    query: Record<string, string>
  ): Promise<IComments[]> {
    const { filter, sortQuery, skipQuery, limitQuery } = this.queryMaker(query);

    return this.COMMENT.find(filter)
      .sort(sortQuery)
      .skip(skipQuery)
      .limit(limitQuery);
  }

  public async getCommentById(id: string): Promise<IComments | null> {
    return this.COMMENT.findById(id);
  }

  public async updateComment(
    id: string,
    data: Partial<IComments>
  ): Promise<IComments | null> {
    return this.COMMENT.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  }

  public async deleteComment(id: string): Promise<IComments | null> {
    return this.COMMENT.findByIdAndDelete(id);
  }
}

export default CommentsService;
