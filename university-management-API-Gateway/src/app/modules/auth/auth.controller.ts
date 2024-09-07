import { NextFunction, Request, Response } from 'express';
import { AuthenticationService } from './auth.service';
import sendResponse from '../../../shared/response';
import config from '../../../config';
import httpStatus from 'http-status';
import { error } from 'console';

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.loginUser(req);
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true
    };
    const { refreshToken, ...others } = result.data;
    res.cookie('refreshToken', refreshToken, cookieOptions);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User Logged in!',
      data: others
    });
  } catch (error) {
    next(error);
  }
};
const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.refreshToken(req);
    // const cookieOptions = {
    //   secure: config.env === 'production',
    //   httpOnly: true
    // };
    const { ...others } = result.data;
    // res.cookie('refreshToken', refreshToken, cookieOptions);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'New Refresh Token Generated!',
      data: others
    });
  } catch (error) {
    next(error);
  }
};
const changePassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.changePassword(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.forgotPassword(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.resetPassword(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
export const AuthenticationController = {
  loginUser,
  refreshToken,
  changePassword,
  resetPassword,
  forgotPassword
};
