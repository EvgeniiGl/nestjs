import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {fromFetch} from 'rxjs/fetch';
import {catchError, from, Observable, of, switchMap, tap} from "rxjs";
import {AxiosResponse} from "axios";

@Injectable()
export class GithubService {

    constructor(private readonly httpService: HttpService) {
    }

    repositories(q) {
        const url = 'https://api.github.com/search/repositories?q=' + q;
        const data$: Observable<any> = fromFetch(url).pipe(
            switchMap(response => {
                if (response.ok) {
                    // OK return data
                    const data = response.json()
                    console.log(data);
                    return data;
                } else {
                    // Server is returning a status requiring the client to try something else.
                    console.error(of({error: true, message: `Error ${response.status}`}));
                    return of({error: true, message: `Error ${response.status}`});
                }
            }),
            catchError(err => {
                // Network or other error, handle appropriately
                console.error(err);
                return of({error: true, message: err.message})
            })
        );
        data$.subscribe({
            next: result => console.log(result),
            complete: () => console.log('done')
        });
    }
    
    projects(q){
        const data$: Observable<AxiosResponse<any, any>> = from(this.httpService.get('https://gitlab.com/api/v4/projects?search=' + q));
        data$.pipe(
            tap((response) => {
                console.log(response.data);
            })
        ).subscribe();
    }
}
