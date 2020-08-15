/** 
 * @todo
 * @body https://github.com/vguillou/pm2-list-rest/blob/master/src/startHttpServer.js https://github.com/rconjoe/pm2panel/blob/master/pm2panel.js
 */

import { Server } from 'http';
import dotenv from 'dotenv';
dotenv.config();

const portOfApplication = process.env.PORT || 4404;

let server = new Server();

import socker from './socker';
socker(server);

export default async () => {
    server.listen(portOfApplication, function() {
      console.log(`listening on *:${portOfApplication}`);
    });
}