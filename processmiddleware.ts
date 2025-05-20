import { NextFunction, Response, Request } from "express";

export const processMiddleWare = (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  const startTime = Number(new Date());
  resp.on("finish", () => {
    const endTime = Number(new Date());

    console.log(`timetaken :${endTime - startTime}ms`);
  });
  next();
};
