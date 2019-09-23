$(document).ready(function() {


    const startButton = $(".start-btn");
    const attackButton = $('#attack');

    const startPage = $("#start-page");
    const winner =  $("#winner-page");
    const loser = $("#loser-page");
    const arena = $("#arena-page");

    let getstarted = arena.hide();
    let winnerPage = winner.hide();
    let loserPage = loser.hide();

    let yourHealthBar = $('#yourHealthBar');
    let compHealthBar = $('#compHealthBar');
    let joe = $("#joe");
    let linda = $("#linda");
    let freddy = $("#freddy");
    let isaiah = $("#isaiah");



    let yourattack = Math.round(Math.random() * 12);
    let compattack = Math.round(Math.random() * 2);
    let yourHealth = 100;
    let compHealth = 100;
    let characters = [];

    joe.on('click', () =>{
        $("#hero-img").attr("src" , playJoe.imageUrl);
        $("#hero-name").html(playJoe.name)

    });
    linda.on('click', () =>{
        $("#hero-img").attr("src" , playLinda.imageUrl);
        $("#hero-name").html(playLinda.name)

    });
    freddy.on('click', () =>{
        $("#hero-img").attr("src" , playFreddy.imageUrl);
        $("#hero-name").html(playFreddy.name)

    });
    isaiah.on('click', () =>{
        $("#hero-img").attr("src" , playIsaiah.imageUrl);
        $("#hero-name").html(playIsaiah.name)

    });

    // hero stats
    let charHero = [{
        name: 'Joe',
        Attack: 10,
        imageUrl: "https://media.giphy.com/media/zwhknCyqHExnW/giphy.gif",
        hero: true
    }, {
        name: 'Linda',
        Attack: 10,
        imageUrl: "https://media.giphy.com/media/11jokITGudhl8Q/source.gif",
        hero: true
    }, {
        name: 'Freddy',
        Attack: 10,
        imageUrl: "https://media.giphy.com/media/Zguen4lLEsOtO/giphy.gif",
    }, {
        name: 'Isaiah',
        Attack: 10,
        imageUrl: "https://media.giphy.com/media/Exyy0Ocz88jQY/giphy.gif",
        hero: true
    }, ];


    let playJoe = charHero[0];
    let playLinda = charHero[1];
    let playFreddy = charHero[2];
    let playIsaiah = charHero[3];


    var selectName = $('#hero-list').find(":selected").text();



    startButton.on("click", () => {
        startPage.hide();
       // heroImg = selcectHero.imageUrl;
       // document.getElementById('hero_box12').src = heroImg;


        if (getstarted === arena.hide()) {
            getstarted = arena.show();
            }
        $('#homepage').css("background-image", "url(https://ae01.alicdn.com/kf/HTB1DpBjknmWBKNjSZFBq6xxUFXaZ/Allenjoy-backgrounds-for-photography-studio-boxing-arena-blurred-Cheering-spectator-stadium-spotlight-backdrop-new-photocall.jpg_640x640q70.jpg)");
    });

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
        getstarted = arena.hide();
        if (compHealth <= 0 && winnerPage === winner.hide() ) {
            winnerPage = winner.show();
            $('#homepage').css("background-image", "url(https://media.giphy.com/media/l2JJy2RVsHxfv3yw0/giphy.gif)");
        } if(yourHealth <= 0 && loserPage === loser.hide() ) {
            loserPage = loser.show();
            $('#homepage').css("background-image", "url(https://media.giphy.com/media/O0GsnJyMPE2kM/giphy.gif)");
        }
    };

});
