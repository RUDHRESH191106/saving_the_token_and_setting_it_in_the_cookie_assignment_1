const jwt = require('jsonwebtoken');
const secretKey = 'mySecetKey'

const encrypt = (payload) => {
  // encrypt the payload and return token
  return jwt.sign(payload, secretKey);
};

const decrypt = (token) => {
  // return decoded payload
  return jwt.verify(token, secretKey);
};

const payload = {username: 'john_doe'};

const token = encrypt(payload);
console.log('Token:', token);

const data  = decrypt(token);

if(data && data.username === payload.username) {
  console.log('Success:', data);
} else {
  console.log('Failed to verify token');
}

module.exports = {
  encrypt,
  decrypt
}
