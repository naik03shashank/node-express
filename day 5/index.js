const crypto=require('crypto');
// crypto is mainly used for security purpose ,used for encryption ,token,password,hashing etc

// create a random bytes
const random=crypto.randomBytes(6).toString('hex');
console.log(random);

const pass=crypto.createHash('sha256').update('password').digest('hex');
console.log(pass);// sha256 is a cryptogrpahic hash function takes input and converts them into a fixed-length string of 64 hexidecimal



// using hash password exampole
const password="hello world";
const pass1=crypto.createHash('sha256').update(password).digest('hex');
console.log(pass);