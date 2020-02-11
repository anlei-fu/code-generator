class Package {
    constructor() {
        this.namaSpace = "";
    }
}

class Import {
    constructor() {
        this.reference = "";
    }
}

class Member {
    constructor() {
        this.visibility = "";
        this.annotations = "";
        this.comment = "";
        this.final = false;
        this.static = false;
        this.name = "";
    }
}

class Parameter extends Member {
    constructor() {
        super();
        this.type = "";
    }
}

class Method extends Member {
    constructor() {
        super();
        this.parameters = [];
        this.returnType = "";

    }
}

class Filed extends Member {
    constructor() {
        super();
    }
}

class Block {
    constructor() {
        this.items = [];
    }
}

class Comment {
    constructor() {
        this.content = "";
    }
}

class BlockItem {
    constructor() {
        this.block = new Block();
    }
}

class If extends BlockItem {
    constructor() {
        super();
        this.condition = "";
    }
}

class Else extends BlockItem {
    constructor() {
        super();
        this.condition = "";
    }
}

class While extends BlockItem {
    constructor() {
        super();
        this.condition = "";
    }
}

class For extends BlockItem {
    constructor() {
        super();
        this.condition = "";
    }
}

class DoWhile extends BlockItem {
    constructor() {
        super();
        this.condition = "";
    }
}

class Switch extends BlockItem {
    constructor() {
        super();
        this.condition = "";
    }
}

class Case extends BlockItem {
    constructor() {
        super();
        this.condition = "";
    }
}

class Expression {
    constructor() {
        this.content = "";
    }
}


class Class extends Member {
    constructor() {
        this.subClasses = [new Class()];
        this.methods = [new Method()];
        this.fileds = [new Filed];
        this.extends = [""];
        this.impls = [""];
        this.isAnnotationInterface = false;
        this.isInterface = false;
    }
}