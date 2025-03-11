import { model, Schema } from "mongoose";
import { IPOll, PollsModel } from "./polls.interface";

const pollsSchema = new Schema<IPOll, PollsModel>(
  {
    id: { type: String },
    question: { type: String, required: true },
    options: [
      {
        name: { type: String, required: true },
        votes: { type: Number, required: false },
      },
    ],
    experationDate: { type: Date, required: true },
  },
  { timestamps: true }
);

pollsSchema.pre("save", function (next) {
  const poll = this as IPOll;
  if (!poll.id) {
    poll.id = this._id;
  }
  next();
});

const Polls = model<IPOll, PollsModel>("Polls", pollsSchema);

export default Polls;
