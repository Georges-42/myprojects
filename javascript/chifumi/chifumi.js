

// declaration des variables

let scoreplayer = document.querySelector('#scoreplayer');

let playerimage = document.querySelector('.image');

let computerimage = document.querySelector('.imagecomputer');

let scorecomputer = document.querySelector('#scorecomputer');

let choiceplayers = document.querySelectorAll('button');


let choiceplayerid;

let choiceplayer ;

let choicecomputer ;


// fonction qui genre le choix de l'ordinateur

function genere_choix_ordinateur(){
    // on genre aleatoirement trois entiers naturelles entre 1 et 3
    computer = Math.floor(Math.random()*3)+1;
    // corespondance entre chiffres et mots fare du jeux
    if(computer===1){
        choicecomputer="stone";
    }if(computer===2){
        choicecomputer="paper";
    }if(computer===3){
        choicecomputer="scissor";
    }

    computerimage.innerHTML = `<img src="${choicecomputer}.jpg"/>`;

    // return choicecomputer;
    // console.log(choicecomputer);
}


function verification(){

    if(choiceplayerid=="stone" && choicecomputer=="paper"){
        scorecomputer.innerHTML = parseInt(scorecomputer.innerHTML)+1;
    }else if(choiceplayerid=="stone" && choicecomputer=="scissor"){
        scoreplayer.innerHTML = parseInt(scoreplayer.innerHTML)+1;
    }else if(choiceplayerid=="paper" && choicecomputer=="stone"){
        scoreplayer.innerHTML = parseInt(scoreplayer.innerHTML)+1;
    }else if(choiceplayerid=="paper" && choicecomputer=="scissor"){
        scorecomputer.innerHTML = parseInt(scorecomputer.innerHTML)+1;
    }else if(choiceplayerid=="scissor" && choicecomputer=="stone"){
        scorecomputer.innerHTML = parseInt(scorecomputer.innerHTML)+1;
    }else if(choiceplayerid=="scissor" && choicecomputer=="paper"){
        scoreplayer.innerHTML = parseInt(scoreplayer.innerHTML)+1;
    }
}

// Choix du joeurs aux clicks des differents boutons

choiceplayers.forEach(choiceplayer => choiceplayer.addEventListener("click",(e)=>{
    // recuperation de l'id du bouton cliquer
    choiceplayerid = e.target.id;
    // creation de l'image correspondante au choix du joueur
    playerimage.innerHTML = `<img src="${choiceplayerid}.jpg"/>`;

    genere_choix_ordinateur()

    verification()

}))














