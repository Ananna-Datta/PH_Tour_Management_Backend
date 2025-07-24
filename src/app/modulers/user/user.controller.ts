/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status-codes";
import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.service";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";


const createUser = catchAsync(async(req: Request, res: Response,next:NextFunction)=>{
  const user = await userServices.createRouter(req.body)
  sendResponse(res,{
    success:true,
    statusCode:httpStatus.CREATED,
    message: "User created successfully",
    data:user,
  })
  
})
const getUsers = catchAsync(async(req: Request, res: Response,next:NextFunction)=>{
  const result = await userServices.getAllUsers();

  sendResponse(res,{
    success:true,
    statusCode:httpStatus.CREATED,
    message: "All User Retrived successfully",
    meta:result.meta,
    data:result.data
  })
    
})

export const UserControllers = {
  createUser,
  getUsers
};
function err(reason: any): PromiseLike<never> {
  throw new Error("Function not implemented.");
}

