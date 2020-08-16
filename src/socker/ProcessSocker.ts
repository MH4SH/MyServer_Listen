import {Server} from "http";
import ProcessController from '../controllers/ProcessController';
import socketio, { Socket } from "socket.io";
import {verifySocker, SocketAuth} from '../middlewares/auth';

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoxLCJpYXQiOjE1OTc1Nzc3NDcsImV4cCI6MTU5NzY2NDE0N30.m0mkDMJZlf1EpJ6DBH-gJtidCYiaWfbPvz8uibjlur4
//https://medium.com/swlh/socket-io-games-the-right-way-using-nodejs-and-react-not-a-chat-app-part-1-e7a49d2f3f51
export default (server: Server) => {
    const io = socketio.listen(server, {
        path: '/socket/process'
    });

    console.log('Started listening!');

    io.use(verifySocker).on("connection", (socket: SocketAuth) => {

        console.info(`Client entrou [id=${socket.id}]`);

        socket.on("disconnect", () => {
            console.info(`Client saiu [id=${socket.id}]`);
        });

        let update = setInterval(async ()=>{
            socket.emit("process:list", await ProcessController.index());
        }, 30000);


        socket.on("process:setTime", function(newTime: number) {

            clearInterval(update);
            update = setInterval(async ()=>{
                socket.emit("process:list", await ProcessController.index());
            }, newTime*1000);

        })


        socket.on("process:start", async function(processId: number) {
            socket.emit("process:start", await ProcessController.start(processId));
            socket.broadcast.emit("process:list", await ProcessController.index());
            socket.emit("process:list", await ProcessController.index());
        });
        socket.on("process:stop", async function(processId: number) {
            socket.emit("process:stop", await ProcessController.stop(processId));
            socket.broadcast.emit("process:list", await ProcessController.index());
            socket.emit("process:list", await ProcessController.index());
        });
        socket.on("process:restart", async function(processId: number) {
            socket.emit("process:restart", await ProcessController.restart(processId));
            socket.broadcast.emit("process:list", await ProcessController.index());
            socket.emit("process:list", await ProcessController.index());
        });
        socket.on("process:delete", async function(processId: number) {
            socket.emit("process:delete", await ProcessController.delete(processId));
            socket.broadcast.emit("process:list", await ProcessController.index());
            socket.emit("process:list", await ProcessController.index());
        });
        socket.on("process:list", async function() {
            socket.emit("process:list", await ProcessController.index());
        });
    });
}