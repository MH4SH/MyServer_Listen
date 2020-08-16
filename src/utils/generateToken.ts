import jwt from 'jsonwebtoken';
interface Params {
    type: number;
}
export default (params: Params, expiresIn = 86400) => {
    return jwt.sign(params, process.env.HASH_1_SECRET as string, {
        expiresIn
    })

}