const SMALL_TIME = 2;
const BIG_TIME = 5;
const POWER = Power1.easeInOut;
const LINEAR = Linear.easeNone;
const YELLOW = "#FF7";
const GREEN = "#7F7";
const BLUE = "#77F";
const RED = "#F77";
const ROTATION = 90;

// function init() {
//     var box = jQuery(".box");
//     var body = jQuery("body");
//     var col1 = "#F5B";
//     var col2 = "#BF5";
//     var col3 = "#F07";
//     var col4 = "#AFA";
//     TweenMax.fromTo(box, INTERVAL / 1000, {color: "#000"}, {color: col1, ease: POWER});
//     TweenMax.fromTo(body, INTERVAL / 1000, {backgroundColor: "#000"}, {backgroundColor: col2, ease: POWER});
//     setInterval(function() {
//         var sec = INTERVAL / 1000;
//         TweenMax.to(box, sec / 2, {top: "105%", ease: POWER});
//         setTimeout(function() {
//             TweenMax.to(box, sec / 2, {top: 0, ease: POWER});
//         }, INTERVAL / 2);
//         TweenMax.fromTo(box, sec / 4, {color: col1}, {color: col2, ease: LINEAR});
//         TweenMax.fromTo(body, sec / 4, {backgroundColor: col2}, {backgroundColor: col3, ease: LINEAR});
//         setTimeout(function() {
//             TweenMax.fromTo(box, sec / 4, {color: col2}, {color: col3, ease: LINEAR});
//             TweenMax.fromTo(body, sec / 4, {backgroundColor: col3}, {backgroundColor: col4, ease: LINEAR});
//             setTimeout(function() {
//                 TweenMax.fromTo(box, sec / 4, {color: col3}, {color: col4, ease: LINEAR});
//                 TweenMax.fromTo(body, sec / 4, {backgroundColor: col4}, {backgroundColor: col1, ease: LINEAR});
//                 setTimeout(function() {
//                     TweenMax.fromTo(box, sec / 4, {color: col4}, {color: col1, ease: LINEAR});
//                     TweenMax.fromTo(body, sec / 4, {backgroundColor: col1}, {backgroundColor: col2, ease: LINEAR});
//                 }, INTERVAL / 4);
//             }, INTERVAL / 4);
//         }, INTERVAL / 4);
//     }, INTERVAL);
// }

function animateText() {
    var box = jQuery(".box");
    TweenMax.fromTo(box, SMALL_TIME / 2, {opacity: 0}, {opacity: 1, ease: LINEAR}).delay(SMALL_TIME / 2);
    TweenMax.fromTo(box, BIG_TIME,
        {top: 0, rotation: ROTATION},
        {top: "100%", rotation: 0, ease: POWER}
    ).delay(SMALL_TIME);
    TweenMax.fromTo(box, SMALL_TIME, {color: YELLOW}, {color: GREEN, ease: LINEAR});
    TweenMax.fromTo(box, SMALL_TIME, {color: GREEN}, {color: BLUE, ease: LINEAR}).delay(SMALL_TIME);
    TweenMax.fromTo(box, SMALL_TIME, {color: BLUE}, {color: RED, ease: LINEAR}).delay(2 * SMALL_TIME);
}

function animateBackground() {
    var body = jQuery("body");
    TweenMax.fromTo(body, SMALL_TIME,
        {backgroundColor: BLUE},
        {backgroundColor: RED, ease: LINEAR}
    );
    TweenMax.fromTo(body, SMALL_TIME,
        {backgroundColor: RED},
        {backgroundColor: YELLOW, ease: LINEAR}
    ).delay(SMALL_TIME);
    TweenMax.fromTo(body, SMALL_TIME,
        {backgroundColor: YELLOW},
        {backgroundColor: GREEN, ease: LINEAR}
    ).delay(2 * SMALL_TIME);
}

function animateSlides() {
    var box = jQuery(".box");
    var body = jQuery("body");
    var images = ["cat.jpg", "cat2.jpg", "chicken.jpg", "goat.jpg", "sq.jpg"];
    var i = 0;
    var size = images.length;
    setInterval(function() {
        i = (i + 1) % size;
        setTimeout(function() {
            var old = jQuery("img");
            TweenMax.to(old, SMALL_TIME, {opacity: 0, ease: LINEAR});
            var img = jQuery("<img/>", {src: images[i]});
            TweenMax.fromTo(img, SMALL_TIME, {opacity: 0}, {opacity: 1, ease: LINEAR});
            img.appendTo(body);
            setTimeout(function() {
                old.remove();
            }, SMALL_TIME * 1000);
        }, BIG_TIME * 1000);
    }, BIG_TIME * 1000);
}

function init() {
    animateText();
    animateBackground();
    animateSlides();
}
