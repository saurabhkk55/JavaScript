function setUsername(username){
    this.username = username;
    console.log("Username has been set to: " + this.username);
    console.log("setUsername function is called.");
}

function createUser(username, email, password){
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const user_jacky = new createUser("jacky", "jacky@fb.com", "123");
console.log(user_jacky);
