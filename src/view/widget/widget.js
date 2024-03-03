function HIX_INIT(){const y="http://localhost:3000",g=document.createElement("div");g.id="hix-container-full",g.classList.add("h-screen","w-full","relative"),g.insertAdjacentHTML("beforeend",`
    <div id="hix-chatbox"
        class="hix-widget-container flex flex-col hidden items-stretch justify-center w-full h-screen md:w-96 md:max-h-[70%] md:rounded-2xl absolute right-0 bottom-0 z-20 md:right-[2rem] md:mb-[8rem]">
        <header class="bg-main-color text-white flex flex-col items-center justify-center w-full p-2.5 md:rounded-t-2xl">
        <div class="relative w-full flex justify-center">
            <div id="hix-close-chat-btn" class="absolute right-2 top-2 text-2xl hover:animate-pulse">
            <i class='bx bx-x'></i>
            </div>
            <img class="rounded-full w-16 bg-gradient-to-b from-pink-600 via-orange-500 to-yellow-500 p-1"
            src="./src/logo/log-hix-f2.jpg" alt="">
        </div>
        <h1>\u0645\u0627 \u062F\u0631 \u0641\u0642\u0637 \u0686\u0646\u062F \u0644\u062D\u0638\u0647 \u0628\u0647 \u0634\u0645\u0627 \u062C\u0648\u0627\u0628 \u0645\u06CC\u062F\u06CC\u0645</h1>
        <p>.\u0644\u0637\u0641\u0627 \u0633\u0648\u0627\u0644\u062A\u0648\u0646 \u0631\u0648 \u0628\u067E\u0631\u0633\u06CC\u062F</p>
        </header>

        <div class=" w-full bg-white grow flex flex-col">
        <div class="h-96 p-4 overflow-y-auto overflow-x-hidden grow">
            <ul id="chatScreen" class="flex flex-col" dir="rtl">
            <!-- HERE GO THE MESSAGES -->
            </ul>
        </div>
        </div>


        <div class="px-4 py-4 w-full bg-white rounded-2xl">
        <!-- <button class="bg-green-500 rounded-lg py-2 px-4" disabled id="send">Send</button> -->
        <!-- <input type="checkbox" name="ch" id="isBot"> -->
        <div class="flex flex-row justify-between w-full h-10 items-center gap-1">
            <div class="bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 p-0.5 rounded-lg grow">
            <p class="bg-white rounded-md">1</p>
            </div>
            <div class="bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 p-0.5 rounded-lg grow">
            <p class="bg-white rounded-md">1</p>
            </div>
            <div class="bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 p-0.5 rounded-lg grow">
            <p class="bg-white rounded-md">1</p>
            </div>
            <div class="bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 p-0.5 rounded-lg grow">
            <p class="bg-white rounded-md">1</p>
            </div>
            <div class="bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 p-0.5 rounded-lg grow">
            <p class="bg-white rounded-md">1</p>
            </div>
        </div>

        <div class="flex w-full justify-end grow gap-2 flex-row self-end" dir="rtl">
            <svg id="send"
            class=" w-24 rounded-full bg-main-color p-1  text-slate-900 fill-white hover:fill-orange-400 self-center"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
            <div class="">
            <input class="grow w-[220px] p-3 border-none placeholder placeholder-gray-500" id="msg"
                placeholder="\u0633\u0648\u0627\u0644\u062A \u0631\u0648 \u062A\u0627\u06CC\u067E \u06A9\u0646" required dir="rtl">
            </div>
            <div class="flex justify-end w-full gap-[12px]">
            <svg class="text-gray-400 hover:text-slate-600 self-center w-5 h-5" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
            </svg>
            <svg class="duration-300 text-gray-400 hover:text-slate-600 self-center w-5 h-5"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
            </svg>
            </div>
        </div>
        </div>
    </div>

    <div id="hix-chatbtn"
        class="hix-widget-btn-container rounded-full hover:animate-pulse duration-1000 absolute right-[2rem] bottom-[2rem] z-10">
        <img src="./src/logo/icon-widget.svg" alt="hix chat" width="80" height="80">
    </div>
    `);let v=document.createElement("script");v.setAttribute("src","https://unpkg.com/axios/dist/axios.min.js"),document.body.appendChild(v),v.addEventListener("load",()=>{let b=document.createElement("script");b.setAttribute("src","https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"),document.body.appendChild(b),b.addEventListener("load",()=>{let p=document.createElement("script");p.setAttribute("src",`${y}/socket.io/socket.io.js`),document.body.appendChild(p),p.addEventListener("load",()=>{const o=()=>{const t={type:"text",content:f.value};i.emit("send_chat",{message:t}),x(t,1),f.value=""},r=document.getElementById("hix-chatbox"),u=document.getElementById("hix-chatbtn");document.getElementById("hix-close-chat-btn").addEventListener("click",()=>{r.classList.contains("hidden")||r.classList.add("hidden")}),u.addEventListener("click",()=>{r.classList.contains("hidden")?r.classList.remove("hidden"):r.classList.add("hidden"),screen.width<768&&(u.classList.contains("hidden")?u.classList.remove("hidden"):u.classList.add("hidden"))});let i;axios.post("http://localhost:3000/chat",{api_key:"12345"}).then(t=>{i=io("http://localhost:3000",{withCredentials:!0}),i.on("connect",()=>{i.on("user_id",a=>{console.log(a)}),i.on("send_chat",a=>{x(a.message,0)})}),i.connect()});const f=document.getElementById("msg"),h=document.getElementById("send");h.addEventListener("click",o);const w=document.getElementById("chatScreen");function x(t,a){const m=Math.random().toString(36).substring(2,8),l=document.createElement("li");if(a==1?l.classList.add("mb-4","min-h-12","min-w-12","px-5","py-3","bg-gradient-to-b","from-orange-500","via-yellow-500","to-yellow-500","rounded-t-3xl","rounded-r-3xl","break-words","chat-bubble","self-end"):l.classList.add("mb-4","min-h-12","min-w-12","px-5","py-3","rounded-l-3xl","rounded-t-3xl","bg-slate-300","break-words","chat-bubble","self-start"),t.type=="form"){h.removeEventListener("click",o),h.setAttribute("disabled",!0);const e=document.createElement("div");e.classList.add("flex","flex-col","gap-y-2"),Object.entries(t.content).forEach(d=>{switch(d[1].type){case"string":e.insertAdjacentHTML("beforeend",`<div>
                                        <input style="width: 100%;" class="rounded-lg p-2" placeholder="${d[1].placeholder}" type="text">
                                    </div>
                                `);break;case"mobile":e.insertAdjacentHTML("beforeend",`<div dir="ltr" class="flex flex-row mt-3 gap-x-2 justify-around px-3">
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
                                    `);break;case"boolean":e.insertAdjacentHTML("beforeend",`<div class="flex items-center justify-center gap-3">
                                        <input type="checkbox" id="">${d[1].name}
                                    </div>
                                    `);break;case"array":e.insertAdjacentHTML("beforeend",`<div>
                                        <select class="w-full rounded-lg p-2">
                                            ${d[1].options.map((s,c)=>`<option value="${c}">${s}</option>`).join("")}
                                        </select>
                                    </div>
                                    `);break;default:break}});const n=document.createElement("button");n.setAttribute("style","background-color: #333 !important"),n.classList.add("bg-blue-500","text-white","p-2","rounded-full","w-full"),n.innerHTML="\u0627\u0631\u0633\u0627\u0644",n.addEventListener("click",()=>{h.addEventListener("click",o)}),e.insertAdjacentElement("beforeend",n),l.insertAdjacentElement("beforeend",e)}else if(t.type=="catalog"){const e=document.createElement("div");e.id=`swiper-${m}`;const n=document.createElement("div");n.id=`snext-${m}`,n.className="swiper-button-next";const d=document.createElement("div");d.id=`sprev-${m}`,d.className="swiper-button-prev";const s=document.createElement("div");s.id=`catalog-${m}`,s.className="swiper-wrapper",e.appendChild(s),e.appendChild(n),e.appendChild(d),t.content.items.forEach(c=>{s.insertAdjacentHTML("beforeend",`
                                        <div class="swiper-slide flex flex-col border-double border-4 border-sky-500 rounded-2xl content-between items-center">
                                            <img class="rounded-t-lg w-full" src="${c.imageUrl}" alt="">
                                            <div class=" bg-white text-[15px] p-1 w-full text-center">
                                                <p>${c.name}</p>
                                            </div>
                                            <div class="flex justify-items-stretch bg-main-color text-white w-full rounded-b-lg p-3">
                                            <a class="w-full text-center" href="${c.link}" target="_blank">\u0645\u0634\u0627\u0647\u062F\u0647
                                            \u0648 \u062E\u0631\u06CC\u062F
                                            </a>
                                            </div>
                                        </div>
                                            `)});var k=new Swiper(e,{effect:"coverflow",centeredSlides:!0,slidesPerView:"auto",autoHeight:!0,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},loop:!0,simulateTouch:!0,navigation:{nextEl:n,prevEl:d}});k.changeLanguageDirection("rtl"),l.appendChild(e)}else t.type=="text"&&(l.innerHTML=t.content);w.appendChild(l),w.parentElement.scrollTop=w.parentElement.scrollHeight}}),p.addEventListener("error",o=>{console.log(o)})})})}
