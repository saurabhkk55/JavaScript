function one(){
    setTimeout(function(){
        console.log(`one-hello`);
        let one_data = "one-data";
        setTimeout(function(){
            console.log(`two-hello`);
            let two_data = "two-data";
            console.log(`${one_data}`);
            console.log(`two-bye`);
            setTimeout(function(){
                console.log("three-hello");
                console.log(`${one_data}`);
                console.log(`${two_data}`);
                console.log("three-bye");
            }, 5000);
        }, 5000);
        console.log(`one-bye`);
    }, 5000);
}

one();
