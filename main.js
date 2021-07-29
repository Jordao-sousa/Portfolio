

var hamburguer = document.querySelector(".menu-hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("show-menu");
    document.querySelector(".menu-hamburguer").classList.toggle("menu-hamburguers");
});


document.querySelector("#quant").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function(){
    const prazoProjeto = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazoProjeto} Semanas`
    atualizarPreco()
})

function atualizarPreco(){

    const quantPaginas = document.querySelector("#quant").value
    const temJS = document.querySelector("#js").checked
    const incluirLayout = document.querySelector("#layout-sim").checked
    const prazoProjeto = document.querySelector("#prazo").value

    let preco = quantPaginas * 100; 
    if(temJS) preco *= 1.1;
    if(incluirLayout) preco += 500;
    let taxaUrgencia = 1 - (prazoProjeto*0.1);
    preco *= 1 + taxaUrgencia;

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`

}