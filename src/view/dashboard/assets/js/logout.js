window.addEventListener("DOMContentLoaded",()=>{
    const btnRepeat = document.querySelector(".log_out");
    
    btnRepeat?.addEventListener("click", () => {
        setCookie("hix", "", 1)
        window.location.href = window.location.href
    })
})