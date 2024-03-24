document.addEventListener("DOMContentLoaded",()=>{


    const countProduct = document.querySelector('.count-product');
    const countUser = document.querySelector('.count-user');
    const userCahts = document.querySelector('.count-chats');
    const userOpera = document.querySelector('.count-opera');
    const countPackage = document.querySelector('.count-package');
    const titleUser = document.getElementById("title_name_user");
    const titleUserPlan_left = document.getElementById("userPlan_name");

    //USER

    async function dashboardLogic() {
        
        let userPlanId = await getCurrentUser()
        console.log(userPlanId);
        
        if (userPlanId === -1) {
            window.location.href = "./priceplan.html"  
        }
        else {
            getRequest(`api/user_plan/${userPlanId}`).then(async (userPlan) => {
                console.log(4);
                let plan = await getRequest(`api/plan/${userPlan.data.data.plan_id}`)
                let user = await getRequest(`api/user/${userPlan.data.data.user_id}`)

                await showNameUserPlan(user.data.data.user.name, plan.data.data.title);

                const dashboard = await getRequest(`api/dashboard/${userPlanId}`)

                showItem(dashboard.data.data)
                countProduct.innerHTML = dashboard.data.data.productCount
            });
        }
    }


    function showNameUserPlan(name, planTitle) {
        titleUser.innerHTML = `${name} خوش امدید`;
        titleUserPlan_left.innerHTML = `${name} <br /> ${planTitle}`
    }


    function showItem(items) {
        const { maxChats, maxDays, maxOperators, operatorCount, productCount, remainingChats, remainingDays } = items
        console.log(maxChats, maxDays, maxOperators, operatorCount, remainingChats, remainingDays, productCount);

        userCahts.innerText = `${maxChats}`
        countUser.innerText = `${operatorCount}`;
        userOpera.innerText = `${maxOperators}`;
        countPackage.innerText = `${remainingDays}`;

    }
    dashboardLogic()
})
