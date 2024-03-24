function addMessage(mssg, sender) {
    const messageId = Math.random().toString(36).substring(2, 8);

    const message = document.createElement("li");
    if (sender == 1) {
        message.classList.add(
            "mb-4",
            "min-h-12",
            "min-w-12",
            "px-5",
            "py-3",
            "bg-gradient-to-b",
            "from-orange-500",
            "via-yellow-500",
            "to-yellow-500",
            "rounded-t-3xl",
            "rounded-r-3xl",
            "break-words",
            "chat-bubble",
            "self-end"
        );
    } else {
        message.classList.add(
            "mb-4",
            "min-h-12",
            "min-w-12",
            "px-5",
            "py-3",
            "rounded-l-3xl",
            "rounded-t-3xl",
            "bg-slate-300",
            "break-words",
            "chat-bubble",
            "self-start"
        );
    }

    if (mssg.type == "form") {
        sendBtn.removeEventListener(
            "click",
            sendBtnClickEventHandler
        );
        sendBtn.setAttribute("disabled", true);

        const formMessageContainer = document.createElement("div");
        formMessageContainer.classList.add(
            "flex",
            "flex-col",
            "gap-y-2"
        );

        Object.entries(mssg.content).forEach((field) => {
            switch (field[1].type) {
                case "string":
                    formMessageContainer.insertAdjacentHTML(
                        "beforeend",
                        `<div>
                                        <input style="width: 100%;" class="rounded-lg p-2" placeholder="${field[1].placeholder}" type="text">
                                    </div>
                                `
                    );
                    break;
                case "mobile":
                    formMessageContainer.insertAdjacentHTML(
                        "beforeend",
                        `<div dir="ltr" class="flex flex-row mt-3 gap-x-2 justify-around px-3">
                                        <div>
                                            <select class="rounded-lg px-5">
                                                <option value="">+98</option>
                                            </select>
                                        </div>
                                        <div>
                                            <input class="rounded-lg placeholder:text-center p-0.5" type="tel"
                                                placeholder="*** *** ****" maxlength="10" id="">
                                        </div>
                                    </div>
                                    `
                    );
                    break;
                case "boolean":
                    formMessageContainer.insertAdjacentHTML(
                        "beforeend",
                        `<div class="flex items-center justify-center gap-3">
                                        <input type="checkbox" id="">${field[1].name}
                                    </div>
                                    `
                    );
                    break;
                case "array":
                    formMessageContainer.insertAdjacentHTML(
                        "beforeend",
                        `<div>
                                        <select class="w-full rounded-lg p-2">
                                            ${field[1].options
                            .map((option, index) => {
                                return `<option value="${index}">${option}</option>`;
                            })
                            .join("")}
                                        </select>
                                    </div>
                                    `
                    );
                    break;
                default:
                    break;
            }
        });
        const submitFormMessageBtn =
            document.createElement("button");
        submitFormMessageBtn.setAttribute(
            "style",
            "background-color: #333 !important"
        );
        submitFormMessageBtn.classList.add(
            "bg-blue-500",
            "text-white",
            "p-2",
            "rounded-full",
            "w-full"
        );
        submitFormMessageBtn.innerHTML = "ارسال";
        submitFormMessageBtn.addEventListener("click", () => {
            sendBtn.addEventListener(
                "click",
                sendBtnClickEventHandler
            );

            // HERE SHOULD SEND THE FORM
        });
        formMessageContainer.insertAdjacentElement(
            "beforeend",
            submitFormMessageBtn
        );
        message.insertAdjacentElement(
            "beforeend",
            formMessageContainer
        );
    } else if (mssg.type == "catalog") {
        const s1 = document.createElement("div");
        s1.id = `swiper-${messageId}`;

        const snext = document.createElement("div");
        snext.id = `snext-${messageId}`;
        snext.className = "swiper-button-next";

        const sprev = document.createElement("div");
        sprev.id = `sprev-${messageId}`;
        sprev.className = "swiper-button-prev";

        const catalogWrapper = document.createElement("div");
        catalogWrapper.id = `catalog-${messageId}`;
        catalogWrapper.className = "swiper-wrapper";

        s1.appendChild(catalogWrapper);
        s1.appendChild(snext);
        s1.appendChild(sprev);

        mssg.content.items.forEach((catalogItem) => {
            catalogWrapper.insertAdjacentHTML(
                "beforeend",
                `
                                        <div class="swiper-slide flex flex-col border-double border-4 border-sky-500 rounded-2xl content-between items-center">
                                            <img class="rounded-t-lg w-full" src="${catalogItem.imageUrl}" alt="">
                                            <div class=" bg-white text-[15px] p-1 w-full text-center">
                                                <p>${catalogItem.name}</p>
                                            </div>
                                            <div class="flex justify-items-stretch bg-main-color text-white w-full rounded-b-lg p-3">
                                            <a class="w-full text-center" href="${catalogItem.link}" target="_blank">مشاهده
                                            و خرید
                                            </a>
                                            </div>
                                        </div>
                                            `
            );
        });

        var swiper = new Swiper(s1, {
            effect: "coverflow",
            centeredSlides: true,
            slidesPerView: "auto",
            autoHeight: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            loop: true,
            simulateTouch: true,
            navigation: {
                nextEl: snext,
                prevEl: sprev,
            },
        });
        swiper.changeLanguageDirection("rtl");

        message.appendChild(s1);
    } else if (mssg.type == "text") {
        message.innerHTML = mssg.content;
    }
    chatScreen.appendChild(message);
    chatScreen.parentElement.scrollTop =
        chatScreen.parentElement.scrollHeight;
}
addMessage({
    type:"catalogItem",
    content: {
        items: [
            { imgUrl: "https://images.hindustantimes.com/auto/img/2023/01/17/600x338/Mada_9_1673932815369_1673932821983_1673932821983.png",name: "car1",link: "../../index.html"},
            { imgUrl: "https://images.hindustantimes.com/auto/img/2023/01/17/600x338/Mada_9_1673932815369_1673932821983_1673932821983.png",name: "car2",link: "../../index.html"}
        ],
    }
})


