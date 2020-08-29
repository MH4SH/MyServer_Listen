import { Socket } from 'socket.io';

import jwt, { DecodeOptions } from 'jsonwebtoken';

interface UserAuthenticate extends DecodeOptions {
  type: string;
}

export interface VerifySocker {
  status: boolean;
  decode: {
    type: string;
  };
  messageError: any;
}

export interface SocketAuth extends Socket {
  decode?: {
    type: string;
  };
}

export const verifySocker = (socket: SocketAuth, next: Function) => {
  try {
    if (!socket.handshake.query)
      throw {
        statusCode: 401,
        error: 'Unauthorized',
        message: 'No token provided'
      };

    const { token } = socket.handshake.query;

    if (!token)
      throw {
        statusCode: 401,
        error: 'Unauthorized',
        message: 'No token provided'
      };

    jwt.verify(
      token,
      process.env.HASH_1_SECRET as string,
      (err: any, decoded: any) => {
        if (err)
          throw {
            statusCode: 401,
            error: 'Unauthorized',
            message: 'Token invalid'
          };

        socket.decode = decoded as UserAuthenticate;
        next();
      }
    );
  } catch (err) {
    console.log(err);
  }
};
