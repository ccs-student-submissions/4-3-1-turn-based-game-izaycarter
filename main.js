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




    let yourattack = Math.round(Math.random() * 15);
    let compattack = Math.round(Math.random() * 15);
    let yourHealth = 100;
    let compHealth = 100;
    let characters = [];




    class Player {
        constructor(options) {
            options = options || {};
            this.name = options.name;
        }
    }


    // hero stats
    let Charhero = [{

        name: 'Joe',
        Attack: 10,
        Power: 85,
        imageUrl: "https://media.giphy.com/media/zwhknCyqHExnW/giphy.gif",
        hero: true
    }, {
        name: 'Linda',
        Attack: 10,
        Power: 85,
        imageUrl: "https://media.giphy.com/media/11jokITGudhl8Q/source.gif",
        hero: true
    }, {
        name: 'Freddy',
        Attack: 10,
        Power: 85,
        imageUrl: "https://tenor.com/view/vine-crackhead-fight-gif-11019923",
    }, {
        name: 'Isaiah',
        Attack: 10,
        Power: 85,
        imageUrl: "https://media.giphy.com/media/Exyy0Ocz88jQY/giphy.gif",
        hero: true
    }, ];

    // villian stats

    let charVillian = [{

        name: 'caleb',
        Attack: 10,
        Power: 85,
        imageUrl: "https://media.giphy.com/media/xiYMaJQ3XxxnHDqw8Q/giphy.gif",
        hero: false
    }, {
        name: 'will',
        Attack: 10,
        Power: 85,
        imageUrl: "https://media.giphy.com/media/3o6nUWPstbNkVjHB4Y/giphy.gif",
        hero: false
    }, {
        name: 'adien',
        Attack: 10,
        Power: 85,
        imageUrl: "https://media.giphy.com/media/fGI7OX410yk0uGbZ1H/giphy.gif",
        hero: false
    }, {
        name: 'robbie',
        Attack: 10,
        Power: 85,
        imageUrl: "https://media.giphy.com/media/8JNj02eQD4fPD2hR6d/giphy.gif",
        hero: false
    }, ];


    startButton.on("click", () => {
        startPage.hide();
        if (getstarted === arena.hide()) {
            getstarted = arena.show();
            }
        $('#homepage').css("background-image", "url(https://ae01.alicdn.com/kf/HTB1DpBjknmWBKNjSZFBq6xxUFXaZ/Allenjoy-backgrounds-for-photography-studio-boxing-arena-blurred-Cheering-spectator-stadium-spotlight-backdrop-new-photocall.jpg_640x640q70.jpg)"); 
    });

    // find out what this does,
    // characters.forEach(function(character) {
    //     game[character.name.toUpperCase()] = new Player(character);
    // });

    attackButton.on("click", () => {
        compwidth = (compHealth -= yourattack) + "%";
        compHealthBar.width(compwidth);

        yourwidth = (yourHealth -= compattack) + "%";
        yourHealthBar.width(yourwidth);

        if (compHealth <= 0 || yourHealth <= 0) {
            gameover();
        }

    });

    let gameover = () => {
        if (compHealth <= 0) {
            console.log('you win');
        } else {
            console.log('you lose');
        }
    };

});
