window.setTimeout(function () {
    alert("HAMMER TIME!");
}, 5000);

//timeout plus closure 

function hammerTime(time) {
    window.setTimeout(function(){
        alert (`${time} is hammertime!`);
    }, 5000);
}

//Some Tea? Some Biscuits? 

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits () {
    reader.question("Would you like some tea?", function (firstAns) {
        console.log(`You said ${firstAns}.`);
        reader.question("Would you like some biscuits?", function (secondAns) {
            console.log(`You said ${secondAns}.`);
        })
        const first = (firstAns === 'yes') ? 'do' : "don't";
        const second = (firstAns === 'yes') ? 'do' : "don't";

        console.log(`So you ${firstAns} want tea and you ${secondAns} want coffee.`)
        reader.close();
    })
}

//cat and dogs 

function Cat () {
    this.name = 'Markov';
    this.age = 3;
  }
  
  function Dog () {
    this.name = 'Noodles';
    this.age = 4;
  }
  
  Dog.prototype.chase = function (cat) {
    console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
  };
  
  const Markov = new Cat ();
  const Noodles = new Dog ();