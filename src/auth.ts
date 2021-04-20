import { AuthChecker } from 'type-graphql';
import { CustomContext } from './customContext';

export const customAuthChecker: AuthChecker<CustomContext> = ({ context }): boolean => {
  if (context.serverContext.req.headers.authorization) {
    const authHeader = context.serverContext.req.headers.authorization.split(' ');

    if (authHeader[0] === 'Basic' && Buffer.from(authHeader[1], 'base64').toString() === process.env.AUTH_TOKEN) {
      return true;
    }
  }

  return false;
};
