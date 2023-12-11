import Job from "../models/jobModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customError.js";
export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});

  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  try {
    const { company, position } = req.body;

    const job = await Job.create({ company, position });

    res.status(StatusCodes.CREATED).json({ job });
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);

  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });

  res.status(StatusCodes.OK).json({ msg: "job modified", job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;

  const removedJob = await Job.findByIdAndDelete(id);

  res.status(StatusCodes.OK).json({ msg: "job deleted", job: removedJob });
};
