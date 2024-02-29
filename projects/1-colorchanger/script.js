const body = document.querySelector('body');
const x = document.querySelectorAll('.button');
// console.log(x);

x.forEach((xth) => {
    xth.addEventListener('click', function (e) {
        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor = e.target.id;
                break;
            case "white":
                body.style.backgroundColor = e.target.id;
                break;
            case "blue":
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id;
                break;
            case "purple":
                body.style.backgroundColor = e.target.id;
                break;
            default:
                console.log("Invalid!")
        }
    });
});