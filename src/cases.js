export function casesDelete(token, JSQL) {

}

export function casesSelect(token, JSQL) {
    JSQL.select(token)
        .then((res) => {
            console.log(res);
        }).catch((e) => {
        console.log(e);
    });
}

export function casesUpdate(token, JSQL) {
    JSQL.update(token)
        .then((res) => {
            console.log(res);
        }).catch((e) => {
        console.log(e);
    });
}

export function casesInsert(token, JSQL) {
    JSQL.insert(token)
        .then((res) => {
            console.log(res);
        }).catch((e) => {
        console.log(e);
    });
}