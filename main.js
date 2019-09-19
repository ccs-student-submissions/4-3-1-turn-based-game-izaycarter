$(function() {
    class Player{
        constructor(options){
            options = options || {};
            this.name = options.name;
            this.Attack = {name:options, power: options};
            let defaults = {health:100};
            Object.assign(this,defaults,options);
        }
    }


// hero stats
let joe = new Player({name:"Joe",Attack:{name:"staff of destiny", Power:10}});
joe.hero = true;

let linda = new Player({name:"Linda",Attack:{name:"beam of intensity", Power:10}});
linda.hero = true;

let freddy = new Player({name:"Freddy",Attack:{name:"bolt of might", Power:10}});
freddy.hero = true;

let isaiah = new Player({name:"Isaiah",Attack:{name:"a literal monkeywrench", Power:10}});
isaiah.hero = true;




// villian stats

let caleb = new Player({name:"caleb",Attack:{name:"swarm of talking ducks", Power:10}});
caleb.hero = false;

let rob = new Player({name:"Rob",Attack:{name:"sincopated music notes", Power:10}});
rob.hero = false;

let adien = new Player({name:"Adien",Attack:{name:"thumb tack shutgun", Power:12}});
adien.hero = false;

let will = new Player({name:"Will",Attack:{name:"evil yorkie", Power:10}});
will.hero = false;


});
