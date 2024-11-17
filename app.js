let accessibleOptions = document.querySelector(".accessibility-options");
let accessibleButton = document.querySelector(".accessible-button");

accessibleButton.addEventListener("click",()=>{
    accessibleOptions.classList.toggle("unhide");
});

let fontMinus = document.querySelector(".accessibility-font-size .fa-circle-minus");
let elements = document.querySelectorAll("*:not(.accessibility-options)");
let fontClick = 0;

fontMinus.addEventListener("click", () => {
    if(fontClick < 5){
        fontClick+=1;
        elements.forEach((element) => {
            let currentFontSize = window.getComputedStyle(element).fontSize;
            let newFontSize = parseFloat(currentFontSize) - 0.3;
            element.style.fontSize = `${newFontSize}px`;
            console.log(fontClick);
        });
    }
});

let fontPlus = document.querySelector(".accessibility-font-size .fa-circle-plus");

fontPlus.addEventListener("click",()=>{
    if(fontClick > -5){
        fontClick-=1;
        elements.forEach((element) => {
            let currentFontSize = window.getComputedStyle(element).fontSize;
            let newFontSize = parseFloat(currentFontSize) + 0.3;
            element.style.fontSize = `${newFontSize}px`;
            console.log(fontClick);
        });
    }
});

let reset = document.querySelector(".reset");

reset.addEventListener("click",()=>{
    elements.forEach((element)=>{
        element.style.fontSize = "";
    });
    fontClick = 0;
});
