function setBackgroundImage() {
    var randNum = Math.random();
    var numBackgroundImages = 2;
    var rand1 = Math.round(randNum * (numBackgroundImages - 1));
    images = new Array
    images[0] = "http://magic.wizards.com/sites/mtg/files/images/wallpaper/PollutedDelta_2560x1600_Wallpaper.jpg"
    images[1] = "http://www.artofmtg.com/wp-content/uploads/2014/09/Flooded-Strand-MtG-Art.jpg"
    var image = images[rand1]
    $('body').css({ 'background-image': 'url(' + images[rand1] + ')' });
}

function fadeManaButtons() {
    $(".cell").children("img").click(function () {
        $(this).toggleClass("faded");
    });
}