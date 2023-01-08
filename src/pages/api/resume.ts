import { NextApiHandler } from "next";

const resume = {
  downloads: 0,
};

const handler: NextApiHandler = (req, res) => {
  if (req.method === "POST") {
    resume.downloads++;
  }
  return res.json(resume);
};

export default handler;
