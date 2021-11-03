function recContain(object, item) {
    return Object.keys(object).some(key => {
        const value = object[key];
        if (typeof value === 'object') {
            return recContain(value, item);
        } else return value === item;
    })
}


const object = {
    d: {
        c: {
            b: {
                a: {
                    number: 20,
                    str: 'hi'
                }
            }
        }
    }
}

console.log(recContain(object, 20))