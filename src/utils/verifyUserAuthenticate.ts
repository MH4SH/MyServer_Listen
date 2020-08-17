import { SocketAuth } from '../middlewares/auth'

export const verifyUserIsAdmin = (socket: SocketAuth) => {
	let TypeUserAuthenticate =  socket.decode?.type;
	return TypeUserAuthenticate=='1';
};