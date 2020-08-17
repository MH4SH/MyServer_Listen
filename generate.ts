import generateToken from './src/utils/generateToken';
require("dotenv").config();

let params = {
    type: 1
}

console.log(generateToken(params, 86400))