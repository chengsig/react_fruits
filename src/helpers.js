
//returns a randomly selected item from array of items
function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}

// returns first matching item from items. if item does not exist, return undefined.
function remove(items, item){
    let index = items.indexOf(item);
    if (index === -1){
        return undefined;
    };

    return items.splice(index,1);
}

export { choice, remove };