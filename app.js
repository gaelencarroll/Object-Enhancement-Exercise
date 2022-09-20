function makePerson1(first,last,age){
    return{
        first : first,
        last : last,
        age : age,
        isAlive: true
    }
}
function makePerson(first,last,age){
    return{
        first,
        last,
        age,
        isAlive: true
    }
}
// makePerson('jim','lennon','29')

const mathStuff1 = {
    x : 200,
    add : function(a,b){
        return a + b
    },
    square : function(a){
        return a*a;
    }
}

const mathStuff = {
    x : 200,
    add(a,b){
        return a + b
    },
    square(a){
        return a*a;
    }
}

// const color = {
//     periwinkle : '9c88ff',
//     '9c88ff' : 'periwinkle'
// };

function makeColor1(name,hex) {
    const color = {};
    color[name]  = hex;
    color[hex] = name;
    return color;
};

function makeColor(name,hex) {
    return {
        [name] : hex,
        [hex] : name
    };
};

// makeColor('periwinkle','9c88ff')

const mystery = {
    [6 + 7] : 'thirteen'
};