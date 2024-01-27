import { Server } from "socket.io";
import { UserMessage } from "./types";

export const chatServer = (io: Server) => {
    io.on("connection", (socket) => {
        const roomName = socket.id + "-room";

        socket.join(roomName);

        socket.emit('ConnectedToRoom', roomName);

        socket.on('UserMessage', (message: UserMessage) => {
            console.log(message.type + ':' + message.data);
        });
    });
};
