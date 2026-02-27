const NameStorage = {
    _first: ["Kirby", "Gordon", "Lily", "Boo", "Twiggles", "Pumpkin", "Socks", "Benji", "Chili", "Bandit", "Dusty", "Peeka", "Grey", "Wolfe", "Scoopy"],
    _middle: ["Waddle", "Galacta", "Susie", "Adeleine", "Rick", "Coo", "Kine", "Elfilin", "Glick", "Ringle"],
    _last: ["Sectonia", "Matter", "The Silly", "Bo", "Leap", "Incineroar", "Bulby", "Cotta", "Burg"],

    createNewName: function() {
        let first = Math.floor(Math.random() * this._first.length);
        let middle = Math.floor(Math.random() * this._middle.length);
        let last = Math.floor(Math.random() * this._last.length);

        return `My name is ${this._first[first]} ${this._middle[middle]} ${this._last[last]}.`;
    }
};