(() => {
    const socket = io.connect('http://localhost:3000');

    // socket.emit('addComment',  {
    //         bookId: 'dssdsad',
    //         comment: 'dssdsad12121',
    //     } , answer => {
    //     console.log(answer);
    // });

    socket.on('getAllComments',  answer => {
        console.log(answer);
    });
    socket.emit('getAllComments', { id: 'dssdsad' }, answer => {
        console.log(answer);
    });
})();