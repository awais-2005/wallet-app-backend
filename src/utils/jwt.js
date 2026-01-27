import jwt from 'jsonwebtoken'

export function generateJWT(payload, secret, expiry) {
    return jwt.sign(
        payload,
        secret,
        { expiresIn: expiry },
    );
}