const os =require('os');

// get inform abt os module
console.log("hey the " + os.platform());
console.log(os.userInfo().username);
console.log(os.userInfo().homedir);// to get the home directory of the user
console.log(os.cpus().length);// to get the cpu information
console.log(os.freemem());// to get the free memory of the system
console.log(os.totalmem());// to get the total memory of the system