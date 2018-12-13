var isScrolling;

// var section3Text = document.getElementById("section2Text");
// var section3Image = document.getElementById("section3Image");
// section3Image.style.opacity = 0;
// section3Text.style.opacity = 0;

window.addEventListener('scroll', function (e) {
    window.clearTimeout( isScrolling );
    
    var y = window.scrollY;
    console.log(y);
    //base on window height
    ////var h = window.innerHeight; do as much of your hardcoded numbers based off 


    opacityChanger(y);
    // isScrolling = setTimeout(function() {
    //     if(y <1950 && y > 1500){
    //         // console.log("scrolling to view 1");
    //         $("html, body").animate({ scrollTop: "1716px" });
    //     }
    //     else if (y > 2000 && y < 2550){
    //         $("html, body").animate({ scrollTop: "2251px" });
    //     }
    // }, 500);
    
},false);


function opacityChanger(y){
    var section2Image = document.getElementById("section2Image");
    var section3Image = document.getElementById("section3Image");
    var section2Text = document.getElementById("section2Text");
    var section3Text = document.getElementById("section3Text");

    section3Image.style.opacity = 0;
    section3Text.style.opacity = 0;
    if (y > 2100){
        section2Image.style.opacity = (2600 - y)/500;
        section2Text.style.opacity = (2600 - y)/500;
    }
    if (y > 2600){
        section3Image.style.opacity = 1-((2825-y)/250);
        section3Text.style.opacity = 1-((2825-y)/250);
    }
    if (y > 2825){
        section3Image.style.opacity = ((3075-y)/250);
        section3Text.style.opacity = ((3075-y)/250);
    }
}
