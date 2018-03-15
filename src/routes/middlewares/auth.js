import sha from 'jssha';
import config from '../../config';

export default (req, res, next) => {
    const userToken = req.get('X-Auth-Token');
    const serverToken = hashEndpoint(req.originalUrl);

    // Pour loger les tentatives
    // console.log(`${userToken} vs ${serverToken}`);

    if (!userToken) {
        return res.json({ status: 'fail', message: "Vous devez fournir un token d'authentification." });
    } else if (userToken !== serverToken) {
        return res.json({ status: 'fail', message: "Token d'authentifcation invalide" });
    } else {
        next();
    }
};

export function hashEndpoint (path) {
    const _sha = new sha('SHA-1', 'TEXT');
    _sha.update(path + config.SALT);
    return _sha.getHash('HEX');

    // Pour tester sans avoir sha installé côté client
    // return path + config.SALT;
};
