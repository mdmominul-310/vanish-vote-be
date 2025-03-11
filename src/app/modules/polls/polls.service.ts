import ServiceModel from "../../../helpers/serviceModel";
import { IPOll } from "./polls.interface";
import Polls from "./polls.model";

class PollsService extends ServiceModel {
  POLL: typeof Polls;
  constructor() {
    super();
    this.POLL = Polls;
  }
  public async createPoll(data: IPOll): Promise<IPOll> {
    const isExist = await this.POLL.findOne({ question: data.question });
    if (isExist) {
      throw new this.AppError(this.HttpStatus.CONFLICT, "Poll already exist");
    }
    return this.POLL.create(data);
  }

  public async getPolls(query: Record<string, string>): Promise<IPOll[]> {
    const { filter, sortQuery, skipQuery, limitQuery } = this.queryMaker(query);

    return this.POLL.find(filter)
      .sort(sortQuery)
      .skip(skipQuery)
      .limit(limitQuery);
  }

  public async getPollById(id: string): Promise<IPOll | null> {
    return this.POLL.findById(id);
  }

  public async updatePoll(
    id: string,
    data: Partial<IPOll>
  ): Promise<IPOll | null> {
    return this.POLL.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  }

  public async deletePoll(id: string): Promise<IPOll | null> {
    return this.POLL.findByIdAndDelete(id);
  }
}

export default PollsService;
