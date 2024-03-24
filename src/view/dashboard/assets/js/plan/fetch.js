document.addEventListener("DOMContentLoaded", () => {
    const userPlanId = document.getElementById("userPlan_name");

    fechingDialer()
    dashboardLogic()



    function fechingDialer() {

        getRequest(`api/plan/`)
            .then(function (response) {
                getDataPlan(response.data.data)
                console.log(response.data.data);
            })
            .catch(function (error) {
                console.error('Error fetching data:', error);
            });
    }

    function getDataPlan(data) {
        document.getElementById('plan_one').insertAdjacentHTML("beforeend",
            data.map(item => {
                if (item.days <= 30) {
                    return `
            <div class="cont_childern cont_childern-1 position-relative">
                    <h4>${item.title}</h4>
                    <p>ماهانه /<span class="h2">${item.price}</span></p>

                    <h6>تعداد روز: ${item.days}</h6>
                    <h6>محدودیت ارسال فایل: ${item.file_size_limit}</h6>
                    <h6>تعداد اوپراتورها: ${item.operator_count}</h6>
                    <button
                        class="btn btn-danger w-75 border-2 border-primary btn_shop"
                        onclick="invoiceBtn(${item.id})">
                            ${item.title
                        }
                    </button>
                </div>
            `
                }
            }).join(" ")
        )
        document.getElementById('plan_two').insertAdjacentHTML("beforeend",
            data.map(item => {

                if (item.days == 180) {
                    return `
                <div class="cont_childern cont_childern-1 position-relative">
                    <h4>${item.title}</h4>
                    <p>ماهانه /<span class="h2">${item.price}</span></p>

                    <h6>تعداد روز: ${item.days}</h6>
                    <h6>محدودیت ارسال فایل: ${item.file_size_limit}</h6>
                    <h6>تعداد اوپراتورها: ${item.operator_count}</h6>
                    <button
                        class="btn btn-danger w-75 border-2 border-primary btn_shop"
                        onclick="invoiceBtn(${item.id})">
                            ${item.title
                        }
                    </button>
                </div>
                `
                }

            }).join(" ")
        )
        document.getElementById('plan_three').insertAdjacentHTML("beforeend",
            data.map(item => {
                if (item.days === 365) {
                    return `
                <div class="cont_childern cont_childern-1 position-relative">
                    <h4>${item.title}</h4>
                    <p>ماهانه /<span class="h2">${item.price}</span></p>

                    <h6>تعداد روز: ${item.days}</h6>
                    <h6>محدودیت ارسال فایل: ${item.file_size_limit}</h6>
                    <h6>تعداد اوپراتورها: ${item.operator_count === 999999999 ? "نامحدود" : ""}</h6>
                    <button
                        class="btn btn-danger w-75 border-2 border-primary btn_shop"
                        onclick="invoiceBtn(${item.id})">
                            ${item.title
                        }
                    </button>
                </div>
                `
                }
            }).join(" ")
        )
    }

    
    const alertShop = document.getElementById("alert_shop");
    async function invoiceBtn(planId) {
        const user_plan_id = await getCurrentUser();
        if (user_plan_id > -1) {
            alertShop.style.display = "block"
            setTimeout(() => {
                alertShop.style.display = "none"
            }, 3000);
        } else {
            postRequest(`api/invoice/`, {
                planId
            }).then(function (response) {
                console.log(response.data.data.id)
                window.location.href = `checkout.html?invoiceId=${response.data.data.id}`
            }).catch(error => {
                console.log(error);
            })
        }
    }

     async function dashboardLogic() {
        let userPlanId = await getCurrentUser()
        console.log(userPlanId)

       if (userPlanId === -1) {
         return;
        }
        else {
            getRequest(`api/user_plan/${userPlanId}`).then(async (userPlan) => {
                let plan = await getRequest(`api/plan/${userPlan.data.data.plan_id}`)
                let user = await getRequest(`api/user/${userPlan.data.data.user_id}`)

                showNameUserPlan(user.data.data.user.name, plan.data.data.title);

                const dashboard = await getRequest(`api/dashboard/${userPlanId}`)

                countProduct.innerHTML = dashboard.data.data.productCount
            });
        }
    }
    function showNameUserPlan(name, planTitle) {
        userPlanId.innerHTML = `${name} <br /> ${planTitle.length > -1 ? planTitle : ""}`
    }

})



