const nomes = ["Yasmim", "Thaissa", "Isabel", "henrique", "Amanda", "Ryan", "Gabriel"];



export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}




export const nome = aleatorio(nomes)