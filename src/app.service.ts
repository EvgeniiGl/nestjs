import {Injectable} from '@nestjs/common';
import {GithubService} from "./github/github.service";

@Injectable()
export class AppService {
    constructor(private githubService: GithubService) {
    }

    onModuleInit() {
        console.log(`Initialization...`);
        // this.githubService.repositories('some')
        // this.githubService.projects('some')
    }

    getHello(): string {
        return 'Hello Worldd!';
    }
}
