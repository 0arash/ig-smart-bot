function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}



async function invoiceBtn(planId) {
    const user_plan_id = await getCurrentUser();
    if (user_plan_id > -1) {
        alert("شما در حال حاضر پلن فعال دارید")
    } else {
        postRequest(`api/invoice`, {
            planId
        })
            .then(response => {
                console.log(response.data.data.id);
                window.location.href = `checkout.html?invoiceId=${response.data.data.id}`

            }).catch(error => {
                console.log(error);
            })
    }
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

