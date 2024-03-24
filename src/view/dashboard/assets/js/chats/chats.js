document.addEventListener("DOMContentLoaded",()=>{
    let dialer_container = document.querySelector('.dialer_container');
    let bodyChat = document.querySelector('.chat_body');


    window.onload = feching()

    async function feching() {
        const user_plan_id = getCurrentUser()
        getRequest(`api/operator/chats/${user_plan_id}`)
            .then(function (response) {
                getDialer(response.data.data.chats)
                // console.log(response.data.data.chats);
            })
            .catch(function (error) {
                console.error('Error fetching data:', error);
            });
    }

    function fechingDialer() {
        const user_plan_id = getCurrentUser()
        getRequest(`api/operator/chats/${user_plan_id}`)
            .then(function (response) {
                getDialer(response.data.data.chats)
                // console.log(response.data.data.chats);
            })
            .catch(function (error) {
                console.error('Error fetching data:', error);
            });
    }

    function getDialer(datas) {
        dialer_container.insertAdjacentHTML('beforeend',
            datas.map(item => {
                return `<div class="dialer_cotainer-content" id=${"chat_btn_" + item.user_id}>
                <img
                    src="./assets/images/Rectangle 4.png"
                    alt="not found" />
                <div class="dialer_container-name">
                    <h5>${item.name}</h5>
                    <h6>${item.content}</h6>
                </div>
                <div>
                    <h5>${item.time}</h5>
                    <i class="h3 read_msg">
                        ${item.unread ? "•" : ""}
                    </i>
                </div>
            </div>`
            }).join("")
        )

        datas.forEach(item => {
            const userChatBtn = document.getElementById("chat_btn_" + item.user_id);
            userChatBtn.addEventListener("click", (e) => {
                getChat(item.user_id)
            })
        });
    }

    async function getChat(userId) {
        getRequest(`api/operator/chat/1/${userId}`).then(response => {
            console.log(response.data);
            BodyChats(response.data.data.messages)

        }).catch(error => {
            console.log(error);
        })
    }

    function BodyChats(datas) {
        bodyChat.innerHTML = ""
        const messageBubbles = datas.map(item => {
            return `<div>
                    <div class="${item.is_user_message ? "get_msg" : "send_msg"}">
                        <div class="${item.is_user_message ? "get_msg-data" : "send_msg-data"}">
                            <p>
                                ${item.content}
                            </p>
                            <span> ${new Date(item.time).toLocaleTimeString("fa-IR", {
                hour12: false
            })} </span>
                        </div>
                    </div>
                </div>`
        }).join("")
        bodyChat.insertAdjacentHTML('beforeend', `
    <div class="chat_body-date">TODDY</div>
    `)
        bodyChat.insertAdjacentHTML('beforeend', messageBubbles)
    }


})