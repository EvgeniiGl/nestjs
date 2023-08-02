import {
    ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import {Socket, Server} from 'socket.io';
import {CreateBookCommentDto} from './dto/create.book-comment.dto';
import {BookCommentsService} from './book-comments.service';

@WebSocketGateway()
export class BookCommentsGateway {
    constructor(private readonly bookCommentsService: BookCommentsService) {
    }

    @WebSocketServer() server: Server;

    @SubscribeMessage('addComment')
    handleAddComment(@MessageBody() data: CreateBookCommentDto) {
        return this.bookCommentsService.create(data);
    }

    @SubscribeMessage('getAllComments')
    async handleGetAllComments(
        @MessageBody() id: string,
        @ConnectedSocket() client: Socket,
    ) {
        const comments = await this.bookCommentsService.findAllBookComment(
            id,
        );
        client.emit('getAllComments', comments);
    }
}
