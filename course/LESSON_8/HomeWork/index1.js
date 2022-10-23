function getName1(name) {
    return name;
}

const getName2 = function(name) {
    return name;
}

const getName3 = name => name;

console.log(getName1('Vasya'));
console.log(getName2('Ivan'));
console.log(getName3('Pete'));