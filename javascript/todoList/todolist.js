// declaration des variables

let data = document.querySelector('#data');
let plus = document.querySelector('#add');
let ul = document.createElement('ul');
let conteur = document.querySelector('span');
let info = document.querySelector('#info');
let tasks =[];


// function addTask () {
//     let li = document.createElement('li');
//     li.innerHTML = data.value;
//     console.log(data.value);
//     plus.after(ul);
//     ul.appendChild(li);
    

// }


// plus.addEventListener('click',addTask());



plus.addEventListener('click',function (){
    if(data.value != ""){
        //creation de la balise li qui devra contenir la tache entrée 
        let li = document.createElement('input');
        li.setAttribute("type","checkbox");
        li.setAttribute("id","bonjour");

        la = document.createElement('label');
        la.setAttribute("for","bonjour")

        la.innerHTML = data.value;

        // tasks.push(li.innerHTML);

        // conteur.innerHTML = parseInt(conteur.innerHTML) +1;

        // console.log(tasks);

        //ajouter les
        info.after(ul);

        //ajouter comme enfant la balise liste dans la balise ul
        ul.appendChild(li);
        li.after(la)
        //vider la barre d'input 
        data.value="";

        //supprimer la balise "li" en doublecliquant sur elle
        li.addEventListener("dblclick",function (){

            tasks.splice(tasks[tasks.indexOf(li)]);
            li.remove(la)
            ul.removeChild(li);
            
            conteur.innerHTML = parseInt(conteur.innerHTML) - 1;
            console.log(tasks);

            
        })
    }
    else{
        //message d'allert au cas où on entre 
        alert("Champ vide : entre une vrai tache , flémard !! ");
    }
   
    
});