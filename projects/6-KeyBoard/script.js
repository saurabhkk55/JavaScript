const insert = document.querySelector('#insert');

displayKeyInfo = (e) => {
    // console.log(e);
    insert.innerHTML = `
    <table>
        <tr>
            <th>KEY</th>
            <th>CODE</th>
            <th>KEY-CODE</th>
        </tr>
        <tr>
            <td>${e.key === " " ? "Space" : e.key}</td>
            <td>${e.code}</td>
            <td>${e.keyCode}</td>
        </tr>
    </table>
    `;
};

window.addEventListener('keypress', displayKeyInfo);
