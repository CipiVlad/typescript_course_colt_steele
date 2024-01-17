function logMessageLive(msg: string): void {
    if (msg !== null || msg !== undefined || msg !== '') {
        console.info(msg);
    }
    else {
        console.error('you need some message, maaan!!!')
    }
}

logMessageLive('hello friends i am live in console.log()')

