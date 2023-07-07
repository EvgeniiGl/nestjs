import {CallHandler, ExecutionContext, HttpException, Injectable, NestInterceptor} from '@nestjs/common';
import {catchError, Observable, throwError} from 'rxjs';
import {map} from 'rxjs/operators';
import {Request} from "express";

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

        return next
            .handle()
            .pipe(
                map((data) => {
                    return {
                        status: "success",
                        data: data,
                    }
                }),
                catchError((err) => {
                    console.log('log--','\n',
                    'data--',err,'\n',
                    )
                    const request: Request = context.switchToHttp().getRequest();
                    return throwError(
                        () =>
                            new HttpException(
                                {
                                    status: "fail",
                                    data: {
                                        message: err?.message || err?.detail || "Something went wrong",
                                        messages: err?.response?.message || "",
                                        timestamp: new Date().toISOString(),
                                        route: request.path,
                                        method: request.method,
                                    }
                                },
                                err.statusCode || 500
                            )
                    );
                }),
            )

    }
}
