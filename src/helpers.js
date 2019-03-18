
//returns a randomly selected item from array of items
function choice(item) {
    return item[Math.floor(Math.random() * item.length)];
}

export { choice };