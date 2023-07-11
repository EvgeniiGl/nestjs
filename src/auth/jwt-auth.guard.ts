import {ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  public canActivate(context: ExecutionContext) {
    
    
    return super.canActivate(context);
  }
  
  public handleRequest(err, user, info) {
    console.log('log--','\n',
    'err--',err,'\n',
    'user--',user,'\n',
    'info--',info,'\n',
    )
    if (err) {
      throw err;
    }
    if (!user) {
      throw new UnauthorizedException();
    }
    
    return user;
  }
}