document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.querySelector('#login-submit')
    const alertBox = document.getElementById('box-alert')

    loginBtn.addEventListener('click',async function (e) {
        e.preventDefault()
        const emailAddress = document.querySelector('#email-address').value
        const password = document.querySelector('#password').value
        
        const loginForm = document.getElementById("login-form")

            const formData = {
                email: emailAddress,
                password: password
            }

        await postRequest("api/auth/login", formData)
            .then((response) => {
                console.log(response)
                if (response.status == 200) {
                    alertBox.classList.add("alert-success")
                    loginForm.reset()
                    let token = response.data.token
                    set_Cookie("hix", token, 7)
                    async function set_Cookie(cookieName, cookieValue, expirationDays) {
                        var d = await new Date();
                        d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
                        var expires = await "expires=" + d.toUTCString();
                        document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
                    }
                    window.location.href = "./index.html"
                }
            })
            .catch(error => {
                console.log(error)
                if (error.response && error.response.status === 401) {
                    alertBox.classList.remove("hidden-alert");
                    alertBox.classList.add("alert-danger");
                    alertBox.innerHTML = "نام کاربری یا رمز عبور اشتباه است.";
                    setTimeout(() => {
                        alertBox.classList.add("hidden-alert");
                    }, 3000);
                } else {
                    console.error("خطایی رخ داده است: ", error);
                }
            });
        
    })

    

})