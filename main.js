$(function() {
    class Player{
        constructor(options){
            options = options || {};
            this.name = options.name;
            this.Attack = {name:options, power: options};
            let defaults = {health:100};
            Object.assign(this,defaults,options)
        }
    };

let joe = new Player({name:"Joe",Attack:{name:"staff of destiny", Power:10}});
joe.hero = true;

let linda = new Player({name:"Linda",Attack:{name:"beam of intensity", Power:10}});
linda.hero = true;

let freddy = new Player({name:"Freddy",Attack:{name:"bolt of might", Power:10}});
freddy.hero = true;

let isaiah = new Player({name:"Isaiah",Attack:{name:"power of monkeywrench", Power:10}});
isaiah.hero = true;
console.log(joe,linda,freddy,isaiah);

});
