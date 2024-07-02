let idade=0; let MaiorIdade=0; let MenorIdade=0;
for(let i=1; i<=5; i++){
    idade = prompt(`Digite idade do ${i}º jogador: `)
    if(i==1){
    MaiorIdade = idade;
    MenorIdade = idade;
    }
    else{
        if(idade > MaiorIdade){
            MaiorIdade = idade
        }
        if(idade < MenorIdade){
            MenorIdade = idade
        }
    }
}
let jogadorVelho = document.querySelector(".jogadorVelho")
let jogadorNovo = document.querySelector(".jogadorNovo")
jogadorVelho.textContent = `A idade do jogador mais velho é ${MaiorIdade}`
jogadorNovo.textContent = `A idade do jogador mais novo é ${MenorIdade}`
