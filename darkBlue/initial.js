let simpleLevelPlan = `......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`;

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(v2) {
        this.x = this.x + v2.x;
        this.y = this.y + v2.y;
        return this;
    }
    minus(v2) {
        this.x = this.x - v2.x;
        this.y = this.y - v2.y;
        return this;
    }
}

{
    console.log(new Vec(1, 2).plus(new Vec(2, 3)));
    console.log(new Vec(1, 2).minus(new Vec(2, 3)));
}

class level {
    constructor(plan) {
        this.rows = plan.trim().split("\n").map((l) => {[...l]});
        this.height = rows.size();
        this.width = rows[0].size();
        this.startActors = [];

        this.rows = rows.map((row, y) => {
            return row.map((ch, x) => {
                let type = levelChars[ch];
                if (typeof type != "string") {
                    let pos = new Vec(x, y);
                    this.startActors.push(type.create(pos, ch));
                    type = "empty";
                }
                return type;
            });  
        });
    };
};

class State {
   constructor(level, actors, status) {

   } 
}

