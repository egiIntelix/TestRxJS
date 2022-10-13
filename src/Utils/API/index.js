
import { Encrypt, Decrypt } from '../Encryption/';


const baseURL = 'https://ecxstore.ecentrix.net/ecx_store_api/';
const _transformRequest = (data) => {
    let params = new FormData();
    params.append('msg', Encrypt(data));
    return params;
};
const POST = async (...params) => {
    let [url, data] = params;
    return new Promise((resolve, reject) => {
        fetch(baseURL + url, {
            method: 'POST',
            body: _transformRequest(data),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                let decrypted = Decrypt(responseJson);
                resolve(JSON.parse(decrypted));
            })
            .catch(err => {
                reject(err);
            });
    });
};
export { POST };
