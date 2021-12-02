let villians = [{name: "Lord Voldemort", facialHair: false, gender: "M", overFifty: true, hair: false, image: '../assets/images/Voldemort.jpg', cleared: false }, {name: "Cruella Deville", facialHair: false, gender: 'F', overFifty: true, hair: true, image: '../assets/images/cruella.png', cleared: false },
{name: "Darth Vader", facialHair: false, gender: "M", overFifty: false, hair: false, image: '../assets/images/vader.jpg', cleared: false},
{name: "wicked witch of the west", facialHair: false, gender: "F", overFifty: true, hair: true, image: '../assets/images/WickedWitchoftheWest.jpg', cleared: false}, {name: "Syndrome", facialHair: false, gender: "M", overFifty: false, hair: true, image: 'assets/images/syndrome.jpg', cleared: false}, {name: "Ursula", facialHair: false, gender: "F", overFifty: true, hair: true, image: '../assets/images/Ursula.jpg', cleared: false }, {name: "Joker", facialHair: false, gender: "M", overFifty: false, hair: true, image: '../assets/images/joker.jpg', cleared: false }, {name: "Thanos", facialHair: false, gender: "M", overFifty: true, hair: false, image: '../assets/images/thanos.png', cleared: false }, {name: "Jafar", facialHair: true, gender: "M", overFifty: false, hair: true, image: '../assets/images/jafar.jpg', cleared: false }, {name: "White Witch", facialHair: false, gender: "F", overFifty: true, hair: true, image: '../assets/images/whiteWitch.jpg', cleared: false }, {name: "Hades", facialHair: false, gender: "M", overFifty: true, hair: true, image: '../assets/images/hades.jpg', cleared: false }, {name: "Queen of Hearts", facialHair: false, gender: "F", overFifty: true, hair: true, image: '../assets/images/queenOfHearts.jpg', cleared: false }
]

let suspected = villians

function draw(){
  let template = ''
  suspected.forEach(v => {
    template += `<div class="col-3 my-4">
    <div id="${v.name}" class="card selectable" style="width: 18rem;" onclick="guess('${v.name}')">
    <img class="image-height" src="${v.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${v.name}</h5>
    </div>
  </div>
    </div>
   `
  })
  document.getElementById('characters').innerHTML = template
}

let guiltyVillian = villians[Math.floor(Math.random() * villians.length)]

function filter(property){
  suspected = suspected.filter(v => v[property] === guiltyVillian[property])
  document.getElementById(property).innerText = guiltyVillian[property]
  document.getElementById(property).classList.add('disabled')
  draw()
}


function guess(name){
let guess = suspected.find(v => v.name === name)
if(guess.name === guiltyVillian.name){
  console.log("You guessed right!")
  document.getElementById('characters').innerHTML = `<h2>You guessed Correct, ${guess.name} commited the crime, great job guesser</h2>
  <button class="btn btn-danger" onclick="reset()">Solve new case?</button>`
} else {
  console.log("Wrong")
  document.getElementById(name).classList.add('wrong')
  document.getElementById(name).classList.remove('selectable')
}
}


function reset(){
  suspected = villians
  draw()
}



draw()
//hair color, facial hair, sex, age, hat, glasses, name, image