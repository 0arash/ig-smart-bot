
const scriptClick = document.getElementById("content_copy_click_handler");
console.log(scriptClick);

document.addEventListener("DOMContentLoaded",async ()=>{
    const user_plan_id = await getCurrentUser()

    getRequest(`api/settings/script/${user_plan_id}`).then(async (response) =>{
        let dataScriptVegate = response.data.data
        scriptClick.innerText = dataScriptVegate;

    })
})

scriptClick.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(scriptClick.innerText);
        alert('Content copied to clipboard');
    } catch (err) {
        alert('Failed to copy: ' + err); // Use concatenation or template literals
    }
});