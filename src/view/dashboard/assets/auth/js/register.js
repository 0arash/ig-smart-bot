document.addEventListener("DOMContentLoaded", () => {
  const registerBtn = document.querySelector('#register-btn')

  registerBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const userName = document.querySelector('#name').value
    // const phoneNumber = document.querySelector('#phone-number').value
    const password = document.querySelector('#password').value
    const repeatPassword = document.querySelector('#repeat-password').value
    const email = document.querySelector('#email').value
    const mobile = document.querySelector('#mobile').value
    const alertBox = document.querySelector('#alert-box')
    const registerForm = document.querySelector('#register-form')


    if (password !== repeatPassword) {
      alertBox.innerHTML = "رمز عبور با تکرار رمز عبور برابر نیست"
      alertBox.classList.add('alert-danger')
    } else if (userName == '' || userName == null || repeatPassword == '' || repeatPassword == null || email == '' || email == null || mobile == '' || mobile == null) {
      alertBox.innerHTML = "لطفا مقادیر را به صورت کامل وارد کنید"
      alertBox.classList.add('alert-danger')
    } else {
      const formData = {
        name: userName,
        email: email,
        mobile: mobile,
        password: password
      }

      postRequest("api/auth/register", formData).then((response) => {

        if (response.status == 200 || response.status == 201) {
          alertBox.innerHTML = "حساب کاربری شما با موفقیت ایجاد شد لطفا به حساب کاربری خود وارد شوید"
          alertBox.classList.add("alert-success")
          registerForm.reset()
          let token = response.data.token
          setCookie("hix", token, 7)
          window.location.href = "./index.html"
        }

      }).catch(error => {
        if (error.response) {
          console.error('خطای HTTP:', error.response.status, error.response.data);

          if (error.response.data.message.name == "SequelizeUniqueConstraintError" && error.response.data.code) {
            alertBox.innerHTML = "شما قبلا ثبت نام کرده اید لطفا به حساب کاربری خود وارد شوید"
            alertBox.classList.add("alert-danger")
          }

        } else {
          console.log(error)
        }
      });
    }

  })

  console.log('react');
})