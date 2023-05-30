
const loaderContainerElement = document.querySelector('.loaderContainer');
console.log(loaderContainerElement);

const loaderContainer = document.querySelector('.lds-heart');
console.log(loaderContainer);

const pageElement = document.getElementById('page');
console.log(pageElement);


pageElement.style.display = "none";

function waitForPage(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (true);
        }, time);
    });
}

waitForPage(4000).then(
    (val) => { 
        if(val) {
            pageElement.style.display = "block";    
            loaderContainer.style.display = "none";
        }
     }
)