document.addEventListener("DOMContentLoaded", () => {

    const btn_send = document.getElementById("btn_send_email");
    const btn_verify = document.getElementById("btn-verify");
   



    btn_send.addEventListener("click", () => {
        const verify_code = document.getElementById("input-verify").value;
        const email = document.getElementById("input-email_send").value;
        const passwordOne = document.getElementById("passwordOne").value;
        const passwordTwo = document.getElementById("passwordTwo").value;
        postRequest(`api/reset`, {
            email,
        }).then(async (res) => {
            console.log(res);
            if (res.status === 200) {
                document.getElementById("modal").style.display = "flex"
            }
        })
    })
    btn_verify.addEventListener("click", (e) => {
        const verify_code = document.getElementById("input-verify").value;
        const email = document.getElementById("input-email_send").value;
        const passwordOne = document.getElementById("passwordOne").value;
        const passwordTwo = document.getElementById("passwordTwo").value;
        e.preventDefault()
        postRequest(`api/reset/check_code`, {
            email,
            password:passwordOne,
            verify_code
        }).then(async (res) => {
            console.log(res);
            if (res.status === 200) {
                document.getElementById("modal").style.display = 'none'
            }
        })
    })
})