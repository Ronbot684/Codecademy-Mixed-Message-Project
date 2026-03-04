const NameStorage = {
    //Storing names in an object instead of individual variables.
    _first: ["Kirby", "Gordon", "Lily", "Boo", "Twiggles", "Pumpkin", "Socks", "Benji", "Chili", "Bandit", "Dusty", "Peeka", "Grey", "Wolfe", "Scoopy"],
    _middle: ["Waddle", "Galacta", "Susie", "Adeleine", "Rick", "Coo", "Kine", "Elfilin", "Glick", "Ringle"],
    _last: ["Sectonia", "Matter", "The Silly", "Bo", "Leap", "Incineroar", "Bulby", "Cotta", "Burg"],

    //Make a random number that works for all names, then make a sentence with them.
    createName() {
        let first = Math.floor(Math.random() * this._first.length);
        let middle = Math.floor(Math.random() * this._middle.length);
        let last = Math.floor(Math.random() * this._last.length);

        return `My name is ${this._first[first]} ${this._middle[middle]} ${this._last[last]}!`;
    }
};

let text = document.getElementById('message');
let refresh = document.getElementById('button');

function reloadPage() {
    window.location.reload()
};

//Runs the random name every time the page fully loads and reaches the javascript file.
text.innerHTML = NameStorage.createName()

refresh.addEventListener('click', reloadPage);