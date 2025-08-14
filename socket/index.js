import {handleRoomJoin, handleLeaveRoom, handleDisconnect, handleRoomMessage, handleRedisMessage} from './handlers.js';

export function registerSocketHandlers(socket, io, redis) {
    handleRoomJoin(socket);
    handleRoomMessage(socket, io);
    handleLeaveRoom(socket);
    handleDisconnect(socket);
    handleRedisMessage(socket, io, redis);
}