// let nome = prompt("Qual é seu nome? ");
// let idade = prompt("Qual é a sua idade? ");
// let cidade = prompt("Qual cidade você mora? ");

// localStorage.setItem("name", nome);
// localStorage.setItem("age", idade);
// localStorage.setItem("city", cidade);


fetch("https://rickandmortyapi.com/api/character/5", { method: "GET"})
.then((responseFetch)=>{
    responseFetch.json();
    return responseFetch.json();
})
.then((responseApi)=>{
    document.write(`<img src="${responseApi.image}"/>`);
    document.write(`<h1>${responseApi.name}</h1>`);
    document.write(`<p>${responseApi.species}</p>`);
    document.write(`<p>${responseApi.origin.name}</p>`);

})

.catch((err)=>{})