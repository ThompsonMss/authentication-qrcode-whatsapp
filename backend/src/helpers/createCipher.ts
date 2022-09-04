import crypto from 'crypto'

export function createCipher (password: string): string {

    const mykey = crypto.createCipher('aes-128-cbc', `${process.env.HASH_CRYPTO}`);
    let mystr = mykey.update(password, 'utf8', 'hex')
    mystr += mykey.final('hex');

    return mystr;
}
