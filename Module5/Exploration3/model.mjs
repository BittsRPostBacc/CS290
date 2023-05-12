function createEntity(x) {
    return new Entity(x);
}

// Can also do this as "default" export
export default function readEntity() {
    return new Entity("This is the entity");
}

class Entity {
    constructor(name) {
        this.name = name;
    }
}

const STATE = 'TX';

export const COUNTRY = 'USA';
