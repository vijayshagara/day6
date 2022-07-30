class Movie {
    constructor(stringtitle, stringstudio, stringrating) {
        this.title = stringtitle;
        this.studio = stringstudio;
        this.rating = stringrating;
    }
    set rating(modirating) {
        this.rating = modirating
    }

}
var m = new Movie("casino royale ", "Eon productions ", "pg13")
m.rating = "pg"
console.log(m.stringrating)