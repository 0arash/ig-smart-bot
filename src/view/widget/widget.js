const HIX_URL = "http://localhost:3000";
async function HIX_ADD_STYLES() {
    var e = document.createElement("link");
    (e.type = "text/css"), (e.rel = "stylesheet"), (e.href = "./main.css");
    var n = document.createElement("link");
    (n.type = "text/css"),
        (n.rel = "stylesheet"),
        (n.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css");
    var t = document.createElement("link");
    (t.type = "text/css"),
        (e.rel = "stylesheet"),
        (t.href =
            "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"),
        document.head.appendChild(t),
        document.head.appendChild(n),
        document.head.appendChild(e);
}
async function HIX_ADD_TAILWIND() {
    return new Promise((e, n) => {
        let t = document.createElement("script");
        t.setAttribute("src", "https://cdn.tailwindcss.com"),
            document.body.appendChild(t),
            t.addEventListener("load", () => {
                let n = document.createElement("script");
                (n.innerHTML =
                    "\n            tailwind.config = {\n                theme: {\n                  extend: {\n                    colors:{\n                      'main-color':'#3E246B'\n                    },\n                  }\n                }\n              }\n              "),
                    document.body.appendChild(n),
                    e();
            });
    });
}
async function HIX_ADD_ELEMENTS() {
    const e = document.createElement("div");
    (e.id = "hix-container-full"),
        e.classList.add("h-screen", "w-full", "relative"),
        e.insertAdjacentHTML(
            "beforeend",
            '\n            <div id="hix-chatbox"\n                class="hix-widget-container flex flex-col hidden items-stretch justify-center w-full h-screen md:w-96 md:max-h-[70%] md:rounded-2xl absolute right-0 bottom-0 z-20 md:right-[2rem] md:mb-[8rem]">\n                <header class="bg-main-color text-white flex flex-col items-center justify-center w-full p-2.5 md:rounded-t-2xl">\n                <div class="relative w-full flex justify-center">\n                    <div id="hix-close-chat-btn" class="absolute right-2 top-2 text-2xl hover:animate-pulse">\n                    <i class=\'bx bx-x\'></i>\n                    </div>\n                    <img class="rounded-full w-16 bg-gradient-to-b from-pink-600 via-orange-500 to-yellow-500 p-1"\n                    src="./log-hix-f2.jpg" alt="">\n                </div>\n                <h1>ما در فقط چند لحظه به شما جواب میدیم</h1>\n                <p>.لطفا سوالتون رو بپرسید</p>\n                </header>\n        \n                <div class=" w-full bg-white grow flex flex-col">\n                <div class="h-96 p-4 overflow-y-auto overflow-x-hidden grow">\n                    <ul id="chatScreen" class="flex flex-col" dir="rtl">\n                    \x3c!-- HERE GO THE MESSAGES --\x3e\n                    </ul>\n                </div>\n                </div>\n        \n        \n                <div class="px-4 py-4 w-full bg-white rounded-2xl">\n                \x3c!-- <button class="bg-green-500 rounded-lg py-2 px-4" disabled id="send">Send</button> --\x3e\n                \x3c!-- <input type="checkbox" name="ch" id="isBot"> --\x3e\n                <div class="flex flex-row justify-between w-full h-10 items-center gap-1">\n                    <div class="bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 p-0.5 rounded-lg grow">\n                    <p class="bg-white rounded-md">1</p>\n                    </div>\n                    <div class="bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 p-0.5 rounded-lg grow">\n                    <p class="bg-white rounded-md">1</p>\n                    </div>\n                    <div class="bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 p-0.5 rounded-lg grow">\n                    <p class="bg-white rounded-md">1</p>\n                    </div>\n                    <div class="bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 p-0.5 rounded-lg grow">\n                    <p class="bg-white rounded-md">1</p>\n                    </div>\n                    <div class="bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 p-0.5 rounded-lg grow">\n                    <p class="bg-white rounded-md">1</p>\n                    </div>\n                </div>\n        \n                <div class="flex w-full justify-end grow gap-2 flex-row self-end" dir="rtl">\n                    <svg id="send"\n                    class=" w-24 rounded-full bg-main-color p-1  text-slate-900 fill-white hover:fill-orange-400 self-center"\n                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">\n                    <path stroke-linecap="round" stroke-linejoin="round"\n                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />\n                    </svg>\n                    <div class="">\n                    <input class="grow w-[220px] p-3 border-none placeholder placeholder-gray-500" id="msg"\n                        placeholder="سوالت رو تایپ کن" required dir="rtl">\n                    </div>\n                    <div class="flex justify-end w-full gap-[12px]">\n                    <svg class="text-gray-400 hover:text-slate-600 self-center w-5 h-5" xmlns="http://www.w3.org/2000/svg"\n                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">\n                        <path stroke-linecap="round" stroke-linejoin="round"\n                        d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />\n                    </svg>\n                    <svg class="duration-300 text-gray-400 hover:text-slate-600 self-center w-5 h-5"\n                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\n                        stroke="currentColor">\n                        <path stroke-linecap="round" stroke-linejoin="round"\n                        d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />\n                    </svg>\n                    </div>\n                </div>\n                </div>\n            </div>\n        \n            <div id="hix-chatbtn"\n                class="hix-widget-btn-container rounded-full hover:animate-pulse duration-1000 absolute right-[2rem] bottom-[2rem] z-10">\n                <img src="./icon-widget.svg" alt="hix chat" width="80" height="80">\n            </div>\n            '
        ),
        document.body.appendChild(e);
}
async function HIX_ADD_SCRIPTS() {
    let e = new Set();
    function n(n) {
        return new Promise(function (t, d) {
            if (e.has(n)) t();
            else {
                var l = document.createElement("script");
                (l.onload = () => {
                    e.add(n), t();
                }),
                    (l.src = n),
                    document.body.appendChild(l);
            }
        });
    }
    const t = [
        "https://unpkg.com/axios/dist/axios.min.js",
        "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
        `${HIX_URL}/socket.io/socket.io.js`,
    ];
    let d = [];
    for (const e of t) d.push(n(e));
    await Promise.all(d);
}
async function HIX_CHAT_FUNCTIONALITY() {
    const e = () => {
            const e = { type: "text", content: l.value };
            d.emit("send_chat", { message: e }), o(e, 1), (l.value = "");
        },
        n = document.getElementById("hix-chatbox"),
        t = document.getElementById("hix-chatbtn");
    let d;
    document
        .getElementById("hix-close-chat-btn")
        .addEventListener("click", () => {
            n.classList.contains("hidden") || n.classList.add("hidden");
        }),
        t.addEventListener("click", () => {
            n.classList.contains("hidden")
                ? n.classList.remove("hidden")
                : n.classList.add("hidden"),
                screen.width < 768 &&
                    (t.classList.contains("hidden")
                        ? t.classList.remove("hidden")
                        : t.classList.add("hidden"));
        }),
        axios
            .post("http://localhost:3000/chat", { api_key: "1234" })
            .then((e) => {
                (d = io("http://localhost:3000", { withCredentials: !0 })),
                    d.on("connect", () => {
                        d.on("user_id", (e) => {
                            console.log(e);
                        }),
                            d.on("send_chat", (e) => {
                                o(e.message, 0);
                            });
                    }),
                    d.connect();
            });
    const l = document.getElementById("msg"),
        i = document.getElementById("send");
    i.addEventListener("click", e);
    const s = document.getElementById("chatScreen");
    function o(n, t) {
        const d = Math.random().toString(36).substring(2, 8),
            l = document.createElement("li");
        if (
            (1 == t
                ? l.classList.add(
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
                  )
                : l.classList.add(
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
                  ),
            "form" == n.type)
        ) {
            i.removeEventListener("click", e), i.setAttribute("disabled", !0);
            const t = document.createElement("div");
            t.classList.add("flex", "flex-col", "gap-y-2"),
                Object.entries(n.content).forEach((e) => {
                    switch (e[1].type) {
                        case "string":
                            t.insertAdjacentHTML(
                                "beforeend",
                                `<div>\n                                                <input style="width: 100%;" class="rounded-lg p-2" placeholder="${e[1].placeholder}" type="text">\n                                            </div>\n                                        `
                            );
                            break;
                        case "mobile":
                            t.insertAdjacentHTML(
                                "beforeend",
                                '<div dir="ltr" class="flex flex-row mt-3 gap-x-2 justify-around px-3">\n                                                <div>\n                                                    <select class="rounded-lg px-5">\n                                                        <option value="">+98</option>\n                                                    </select>\n                                                </div>\n                                                <div>\n                                                    <input class="rounded-lg placeholder:text-center p-0.5" type="tel"\n                                                        placeholder="*** *** ****" maxlength="10" id="">\n                                                </div>\n                                            </div>\n                                            '
                            );
                            break;
                        case "boolean":
                            t.insertAdjacentHTML(
                                "beforeend",
                                `<div class="flex items-center justify-center gap-3">\n                                                <input type="checkbox" id="">${e[1].name}\n                                            </div>\n                                            `
                            );
                            break;
                        case "array":
                            t.insertAdjacentHTML(
                                "beforeend",
                                `<div>\n                                                <select class="w-full rounded-lg p-2">\n                                                    ${e[1].options
                                    .map(
                                        (e, n) =>
                                            `<option value="${n}">${e}</option>`
                                    )
                                    .join(
                                        ""
                                    )}\n                                                </select>\n                                            </div>\n                                            `
                            );
                    }
                });
            const d = document.createElement("button");
            d.setAttribute("style", "background-color: #333 !important"),
                d.classList.add(
                    "bg-blue-500",
                    "text-white",
                    "p-2",
                    "rounded-full",
                    "w-full"
                ),
                (d.innerHTML = "ارسال"),
                d.addEventListener("click", () => {
                    i.addEventListener("click", e);
                }),
                t.insertAdjacentElement("beforeend", d),
                l.insertAdjacentElement("beforeend", t);
        } else if ("catalog" == n.type) {
            const e = document.createElement("div");
            e.id = `swiper-${d}`;
            const t = document.createElement("div");
            (t.id = `snext-${d}`), (t.className = "swiper-button-next");
            const i = document.createElement("div");
            (i.id = `sprev-${d}`), (i.className = "swiper-button-prev");
            const s = document.createElement("div");
            (s.id = `catalog-${d}`),
                (s.className = "swiper-wrapper"),
                e.appendChild(s),
                e.appendChild(t),
                e.appendChild(i),
                n.content.items.forEach((e) => {
                    s.insertAdjacentHTML(
                        "beforeend",
                        `\n                                                <div class="swiper-slide flex flex-col border-double border-4 border-sky-500 rounded-2xl content-between items-center">\n                                                    <img class="rounded-t-lg w-full" src="${e.imageUrl}" alt="">\n                                                    <div class=" bg-white text-[15px] p-1 w-full text-center">\n                                                        <p>${e.name}</p>\n                                                    </div>\n                                                    <div class="flex justify-items-stretch bg-main-color text-white w-full rounded-b-lg p-3">\n                                                    <a class="w-full text-center" href="${e.link}" target="_blank">مشاهده\n                                                    و خرید\n                                                    </a>\n                                                    </div>\n                                                </div>\n                                                    `
                    );
                }),
                new Swiper(e, {
                    effect: "coverflow",
                    centeredSlides: !0,
                    slidesPerView: "auto",
                    autoHeight: !0,
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0,
                    },
                    loop: !0,
                    simulateTouch: !0,
                    navigation: { nextEl: t, prevEl: i },
                }).changeLanguageDirection("rtl"),
                l.appendChild(e);
        } else "text" == n.type && (l.innerHTML = n.content);
        s.appendChild(l),
            (s.parentElement.scrollTop = s.parentElement.scrollHeight);
    }
}
async function HIX_INIT() {
    await HIX_ADD_STYLES(),
        await HIX_ADD_TAILWIND(),
        await HIX_ADD_ELEMENTS(),
        await HIX_ADD_SCRIPTS(),
        await HIX_CHAT_FUNCTIONALITY();
}
