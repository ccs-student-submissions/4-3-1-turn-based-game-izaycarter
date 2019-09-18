$(function() {
    class Player{
        constructor(options){
            options = options || {};
            this.name = options.name;
            this.mainAttack = {name:options, power: options};
            this.secondAttack = {name:options, power: options};
            let defaults = {health:100};
            Object.assign(this,defaults,options)
        }
    };


});
