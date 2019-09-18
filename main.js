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

let joe = new Player({name:"joe",Attack:{name:"hammerTime", Power:10}});
console.log(joe);

});
