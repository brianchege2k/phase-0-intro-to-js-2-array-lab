// Write your solution here!

const cats = ['Milo', 'Otis', 'Garfield']
console.log(cats)

function destructivelyAppendCat(name){
    cats.push(name)

}

destructivelyAppendCat("Ralph")
console.log(cats)

function destructivelyPrependCat(name){
    cats.unshift(name)
}

destructivelyPrependCat('Bob')
console.log(cats)

function destructivelyRemoveLastCat(name){
    cats.pop(name)
}

destructivelyRemoveLastCat()
console.log(cats)

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}

destructivelyRemoveFirstCat()
console.log(cats)


function appendCat(name) {
    return [...cats, name];
  }

appendCat('Broom')
console.log(cats)


function prependCat(name){
    return [name,...cats]
}

prependCat("Arnold")
console.log(cats)


function removeLastCat(){
    return cats.slice(0,-1)
}

removeLastCat()

function removeFirstCat(){
    return cats.slice(1)
}
removeFirstCat()