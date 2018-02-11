interface IMessage {
    id:string;
    message:string;
}

export class Message implements IMessage {
    private data:{id:string; message:string};
    
    constructor(payload:string) {
        var data = JSON.parse(payload);

        if (!data.id || !data.message) {
            throw new Error('Invalid message payload recieved: ' + payload);
        }

        this.data = data;
    }

    get id():string {
        return this.data.id;
    }

    get message():string {
        return this.data.message;
    }
}