

let table_chat = document.querySelector(".container_table");



function addMsg(message) {
    const chatBody = document.querySelector(".chat_body")
    switch (message.type) {
        case "form":
            chatBody.insertAdjacentHTML("beforeend", `
            <div class="vegent_container" >
                    <div class="vegent_container-data">
                        <div class="p-2" id="table_chat">
                                     ${Object.entries(message.content).map((item, index) => {
                let name = item[0];
                let type = item[1].type;
                let value = item[1].value;
                switch (type) {
                    case "string":
                        return `<ul class="d-flex justify-content-around ${index % 2 == 0 ? "bg-danger" : "bg-primary"} rounded p-1">
                                <li>${name}</li>
                                <li>${value}</li>
                            </ul>`
                    case "mobile":
                        return `<ul class="d-flex justify-content-around ${index % 2 == 0 ? "bg-danger" : "bg-primary"} rounded p-1">
                                <li>${name}<span></span></li>
                                <li>${value}</li>
                            </ul>`
                        break;
                    case "boolean":
                        return `<ul class="d-flex justify-content-around ${index % 2 == 0 ? "bg-danger" : "bg-primary"} rounded p-1">
                                <li>${name}</li>
                                <li>${value}</li>
                            </ul>`

                        break

                    case "array":
                        return `<ul class="d-flex justify-content-around ${index % 2 == 0 ? "bg-danger" : "bg-primary"} rounded p-1">
                                <li>${name}</li>
                                <li>${value}</li>
                            </ul>`

                        break

                    default:
                        break;
                }
            }).join("")
                }
                    </div>
                        <span> Today 11 : 22 </span>
                        </div>
                    </div>
            `).join("")


            break;
            case "text": 
                chatBody.insertAdjacentHTML('beforeend',
                `
                                <div class="get_msg-data">
                                    <p>
                                        ${message.content}
                                    </p>     
                                     <span> ${new Date().toLocaleTimeString("fa-IR", {
                                         hour12: false
                                     })} </span>
                                </div>
                `).join("")
            break;

            case "catalog":
            table_chat.insertAdjacentHTML('beforeend',
            `
            <div class="content">
                                <p>شمارنده</p>
                                <p>اسم</p>
                                <p>لینک</p>
                                <p>عکس</p>
                       </div>
            `
               + message.content.items.map((item,index)=>{
                    return `
                    
                      <div class="content">
                                <p>${index}</p>
                                <p>${item.name}</p>
                                <a href="${item.link}">${item.link}</a>
                                <img src="${item.imageUrl}" alt="not" width="40" />
                       </div>
                    `
                }).join("")
            )

        default:
            break;
    }
}

addMsg({
    type: "catalog",
    content: {
        items: [
            {
                name: "1",
                link: "google.com",
                imageUrl: "http://192.168.1.15:5500/assets/images/Rectangle%204.png"
            }, {
                name: "1",
                link: "google.com",
                imageUrl: "http://192.168.1.15:5500/assets/images/Rectangle%204.png"
            }, {
                name: "1",
                link: "google.com",
                imageUrl: "http://192.168.1.15:5500/assets/images/Rectangle%204.png"
            }
        ]
    }
}) 
addMsg({
    type: "catalog",
    content: {
        items: [
            {
                name: "1",
                link: "google.com",
                imageUrl: "http://192.168.1.15:5500/assets/images/Rectangle%204.png"
            }, {
                name: "1",
                link: "google.com",
                imageUrl: "http://192.168.1.15:5500/assets/images/Rectangle%204.png"
            }, {
                name: "1",
                link: "google.com",
                imageUrl: "http://192.168.1.15:5500/assets/images/Rectangle%204.png"
            }
        ]
    }
})  

addMsg({
    type: "text", content:"kjhbgvvfdbhjdvfertgeyhyhtgtg"
})

