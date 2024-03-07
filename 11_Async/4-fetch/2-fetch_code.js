async function serverData(user){
    try {
        const response = await fetch('https://api.github.com/users/user');
        console.log(response);
        console.log(response.status);
    } catch (error) {
        console.error('Error occurred:', error);
    }
};

serverData("saurabhkk55");
serverData("saurabhkumarkardam");
