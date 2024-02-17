let master = document.querySelector('#bigContainer');
let body = document.body;

console.log(master);
console.log(master.textContent);

master.addEventListener("click", function() {
    console.log(master);
    // master.textContent = "Master: Hi ALL!";
    // master.id = "masterStyle";
    let worker1 = document.createElement("div");
    worker1.textContent = "Worker: Hi, I'am inside the master!";
    worker1.id = "workerStyle";
    master.appendChild(worker1);
    // ponty = document.createElement("div");
    // pong.appendChild(ponty);
    // // body.appendChild(ponty);
    // ponty.textContent = "new Ponty"
    // ponty.id = "new-pinger";
});

master.addEventListener("click", function() {
    let worker1 = document.createElement("div");
    body.appendChild(worker1);
    worker1.textContent = "Worker: Hi, I'am inside the body!";
    worker1.id = "workerStyle";
});