import {Controller, Get, Post, UseGuards, Request, Body, Render} from '@nestjs/common';
import {AppService} from './app.service';
import {UsersGuard} from "./users/users.guard";
import {JwtAuthGuard} from "./auth/jwt-auth.guard";
import {UsersService} from "./users/users.service";
import {UserRegisterDto} from "./users/interfaces/dto/user.register.dto";
import {AuthService} from "./auth/auth.service";
import {UserLoginDto} from "./users/interfaces/dto/user.login.dto";

@UseGuards(UsersGuard)
@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly authService: AuthService,
        private readonly usersService: UsersService,
    ) {
    }

    @Get()
    @Render('index')
    root() {
        return { message: 'Hello world!' };
    }
    
    @Post('signin')
    signin(@Body() body: UserLoginDto) {
        return this.authService.signIn(body.email, body.password);
    }

    @Post('signup')
    signup(@Body() body: UserRegisterDto) {
        return this.usersService.register(body);
    }
}
