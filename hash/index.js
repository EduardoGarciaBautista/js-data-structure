class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    hashMethod(key) {
        let hash = 0;
        for (let index = 0; index < key.length; index++) {
            hash = (hash + key.charCodeAt(index) * index) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        const address = this.hashMethod(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        const address = this.hashMethod(key);
        const bucket = this.data[address];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    return bucket[i][1];
                }
            }
        }
        return undefined;
    }

    delete(key) {
        const addres = this.hashMethod(key);

        const bucket = this.data[addres];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket.splice(i, 1);
                }
            }
        }
        return undefined;
    }
    getAllKeys() {
        const keys = [];
        this.data.forEach(item => {
            if (item) {
                item.forEach(childItem => {
                    keys.push(childItem[0]);
                });
            }
        });
        return keys;
    }
}


const myHashTable = new HashTable(50);

myHashTable.set('saludo', 'Hey');
myHashTable.set('celular', 'iphone');
myHashTable.set('goku', 'goku dbz');

//console.log(myHashTable.get('saludo'));

//myHashTable.delete('saludo');
//console.log(myHashTable.get('saludo'));

console.log(myHashTable.getAllKeys());