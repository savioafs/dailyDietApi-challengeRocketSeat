import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IReqId {
  sub: string;
};


async function ensureAuthenticateClient(req: Request, res: Response, next: NextFunction){
  const authHeader = req.headers.authorization;

  if(!authHeader){
    return res.status(401).json({ errror: 'Token missing'});
  };

  // Recebo o bearer exatamente desta forma: Bearer 9785348-240859034
  const [, token ] = authHeader.split(' ');

  try {
    const { sub } = verify(token, '5d7c2445bd79548fd47058aaceea4dc4') as IReqId;

    req.id_user = sub;

    return next();
  }catch(err) {
    return res.status(401).json({ error: 'Invalid token' });
  };
};

export { ensureAuthenticateClient }