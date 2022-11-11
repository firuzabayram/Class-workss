let tbody = document.querySelector("tbody");
let theadthead = document.querySelector("thead");

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => {
    for(let i = 0; i< data.length;i++){

        tbody.innerHTML += `<tr>
     <td>${data[i].id}</td>
     <td>${data[i].name}</td>
     <td>${data[i].username}</td>
     <td>${data[i].email}</td>
        </tr>`
    }
}
)
