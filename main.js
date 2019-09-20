$(function() {


    const startButton = $(".start-btn");
    const startPage = $("#start-page");
    const arena = $("#arena-page");
    let yourHealthBar = $('#yourHealthBar');
    let compHealthBar = $('#compHealthBar');
    const attackButton = $('#attack');
    let getstarted = arena.hide();
    // let winner =  $("#winner-page")
    // let loser = $("#loser-page")




    let yourattack = Math.round(Math.random()*15);
    let compattack = Math.round(Math.random()*15);
    let yourHealth = 100;
    let compHealth = 100;





        class Player{
            constructor(options){
                options = options || {};
                this.name = options.name;
            }
        }


    // hero stats
    let joe = new Player({name:"Joe"});
    joe.hero = true;

    let linda = new Player({name:"Linda"});
    linda.hero = true;

    let freddy = new Player({name:"Freddy"});
    freddy.hero = true;

    let isaiah = new Player({name:"Isaiah"});
    isaiah.hero = true;




    // villian stats

    let caleb = new Player({name:"caleb"});
    caleb.hero = false;

    let rob = new Player({name:"Rob"});
    rob.hero = false;

    let adien = new Player({name:"Adien"});
    adien.hero = false;

    let will = new Player({name:"Will"});
    will.hero = false;


    startButton.on("click", () => {
        startPage.hide();
        if(getstarted === arena.hide()){
            getstarted = arena.show();
        }
        $('#homepage').css("background-image", "url(https://ae01.alicdn.com/kf/HTB1DpBjknmWBKNjSZFBq6xxUFXaZ/Allenjoy-backgrounds-for-photography-studio-boxing-arena-blurred-Cheering-spectator-stadium-spotlight-backdrop-new-photocall.jpg_640x640q70.jpg)");  
    });



    attackButton.on("click", () => {
        compwidth = (compHealth -= yourattack) + "%";
        compHealthBar.width(compwidth);

        yourwidth = (yourHealth -= compattack) + "%";
        yourHealthBar.width(yourwidth);

        if(compHealth <= 0 || yourHealth <= 0) {
            gameover();
        }

    });

    let gameover = () =>{
        if(compHealth <= 0){
            console.log('you win');
        } else {
            console.log('you lose');
        }
    };

});
