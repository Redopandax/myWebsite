// function myFunction() {
//     colors = ['red', 'blue', 'purple', 'grey', 'black']; 
//     let randomColor = colors[Math.floor(Math.random()*colors.length)];
//     document.querySelector('.box').style.backgroundColor = randomColor;
// }

// function colorChangeWhite() {
//     document.querySelector('section').style.backgroundColor = "white";
// }

// function colorChangeAqua() {
//     document.querySelector('section').style.backgroundColor = "aqua";    
// }

// function colorChangePurple() {
//     document.querySelector('section').style.backgroundColor = "rebeccapurple";
// }

let first_names = ["Arūn", "Kiril", "Shesnak", "Sidron", "Bratka", "Gavril", "Miljon", "Prostat", "Vald", "Duš", "Lemon"
                ,"Vaflo", "Čiūd", "Aurim", "Sauso", "Limon", "Vyr", "Chlam", "Piotr", "Shlang", "Roman", "Ramūn"]
let last_names = ["Čiotko", "Piratov", "Slabanosov", "Kropik", "Čiūdov", "Shesnakov", "Pederososov", "Agromkov", "Oz" 
                    ,"Prikolov", "Čiongov", "Civic", "Ramūnov", "Bliūdko", "Akiniov", "Bilow", "Gazonov", 
                "Matadeuwsz", "Grabko", "Razinkov", "Chlebnicki", "Alkoholov"]

function nameGenerator() {
    let randomFirstName = first_names[Math.floor(Math.random()*first_names.length)]
    let randomLastName = last_names[Math.floor(Math.random()*last_names.length)]

    document.getElementById('names').innerHTML = randomFirstName + ' ' + randomLastName;
}