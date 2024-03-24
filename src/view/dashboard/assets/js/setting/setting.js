


document.addEventListener("DOMContentLoaded", () => {

    const titleTool = document.querySelector(".tool-sport");
    const toolgloos = document.querySelector(".tool-gloos");
    const psitionVegetEle = document.getElementById("psition_veget");
    const fileSend = document.getElementById("input_type_file");
    const attensionVeget = document.getElementById("moveTool");
    const colorChangeElement = document.getElementById("tool_color");
    const user_name = document.getElementById("userPlan_name");
    const hix_changeEle = document.querySelector(".hex_change");
    const alertShop = document.querySelector(".alert_shop"); 
    // new input -
    const welcomInput = document.addEventListener("welcom");
    const explanInput = document.addEventListener("explan");

    colorChangeElement.addEventListener("change",(e)=>{
        hix_changeEle.value = e.target.value
    })

    dataFeching()
    document.getElementById("submitRestart").addEventListener("click", async () => {
        window.location.replace(window.location.href)
    })

    document.getElementById("submitHandler").addEventListener("click",async () => {
        try {
            const title = document.querySelector(".tool-sport").value;
            const caption = document.querySelector(".tool-gloos").value;
            const pos = document.getElementById("psition_veget").value;
            const fileSend = document.getElementById("input_type_file").value;
            const attensionVeget = document.getElementById("moveTool").value;
            const color = document.getElementById("tool_color").value;

            // new
            const welcom = document.addEventListener("welcom").value;
            const explan = document.addEventListener("explan").value;
            // --
            const user_plan_id = await getCurrentUser()

            setWidgetData(color, title, caption,pos,"",user_plan_id ,welcom,explan)

        } catch (error) {
            console.log(error);
        }
    });

    async function dataFeching() {
        const userPlanId = await getCurrentUser()
        getRequest(`api/settings/${userPlanId}`)
            .then(response => {
                showUi(response.data.data)
            }).catch(error => {
                console.log(error);
            })
    }



    function showUi(data) {
        const { color, title, caption, icon, pos } = data;
        titleTool.value = title
        toolgloos.value = caption
        psitionVegetEle.value = pos
        colorChangeElement.setAttribute("value", color)
        hix_changeEle.setAttribute("value", color)
        console.log(color);
    }

    // to set a new settings for wdiget


    function setWidgetData(color, title, caption, pos, icon, user_plan_id,welcome,explain) {
        putRequest(`api/settings`, {
            color, title, caption, pos, icon, welcome, explain, user_plan_id
        }).then(response => {
            alertShop.style.display = "block"
            setTimeout(() => {
                alertShop.style.display = "none"
            }, 3000);
            console.log(response.data);
            console.log(response.data.data.id);
        }).catch(error => {
            console.log(error);
        })
    }


    function updateData(user_plan_id) {
        putRequest(`/settings`, {
            user_plan_id
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

   
});

