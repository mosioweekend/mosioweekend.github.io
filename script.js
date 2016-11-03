const INTERVAL = 4000;
const POWER = Power1.easeInOut;
const LINEAR = Linear.easeNone;

function init() {
    var box = jQuery(".box");
    var body = jQuery("body");
    var col1 = "#F5B";
    var col2 = "#BF5";
    var col3 = "#F07";
    var col4 = "#AFA";
    TweenMax.fromTo(box, INTERVAL / 1000, {color: "#000"}, {color: col1, ease: POWER});
    TweenMax.fromTo(body, INTERVAL / 1000, {backgroundColor: "#000"}, {backgroundColor: col2, ease: POWER});
    setInterval(function() {
        var sec = INTERVAL / 1000;
        TweenMax.to(box, sec / 2, {top: "105%", ease: POWER});
        setTimeout(function() {
            TweenMax.to(box, sec / 2, {top: 0, ease: POWER});
        }, INTERVAL / 2);
        TweenMax.fromTo(box, sec / 4, {color: col1}, {color: col2, ease: LINEAR});
        TweenMax.fromTo(body, sec / 4, {backgroundColor: col2}, {backgroundColor: col3, ease: LINEAR});
        setTimeout(function() {
            TweenMax.fromTo(box, sec / 4, {color: col2}, {color: col3, ease: LINEAR});
            TweenMax.fromTo(body, sec / 4, {backgroundColor: col3}, {backgroundColor: col4, ease: LINEAR});
            setTimeout(function() {
                TweenMax.fromTo(box, sec / 4, {color: col3}, {color: col4, ease: LINEAR});
                TweenMax.fromTo(body, sec / 4, {backgroundColor: col4}, {backgroundColor: col1, ease: LINEAR});
                setTimeout(function() {
                    TweenMax.fromTo(box, sec / 4, {color: col4}, {color: col1, ease: LINEAR});
                    TweenMax.fromTo(body, sec / 4, {backgroundColor: col1}, {backgroundColor: col2, ease: LINEAR});
                }, INTERVAL / 4);
            }, INTERVAL / 4);
        }, INTERVAL / 4);
    }, INTERVAL);
}
