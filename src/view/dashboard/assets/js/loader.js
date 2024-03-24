
window.addEventListener("DOMContentLoaded",()=>{
const loaderElement = document.querySelector(".loeader")



    function loaderHandler() {
        setTimeout(() => {
            loaderElement.style.opacity = "0";
            setTimeout(() => {
                loaderElement.style.display = "none";
            }, 500);
        }, 2000);
    }
    loaderHandler()

})




