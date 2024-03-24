const alertElement = document.getElementById("alert_dic")
const containerDaysPrice = document.getElementById("container_days_price");
const userPlanElement = document.getElementById("userPlan_name");
console.log(userPlanElement);

window.onload = FetchData()
function FetchData() {
    getRequest(`api/invoice/${window.query("invoiceId")}`)
        .then(response => {
            console.log(response.data);
            showDatas(response.data.data)

        }).catch(error => {
            console.log(error);
        })
}

function showDatas(datas) {
    const plan = datas.plan;
    let total = null;
    planPrice = plan.price;
    containerDaysPrice.insertAdjacentHTML("beforeend",

        `
                            <p>سفارش شما</p>
                        <div class="border border-slate-300 rounded container">
                            <div class="d-flex flex-row justify-content-start">
                                <div class="">
                                    <img
                                        class="position-absolute img"
                                        src="/assets/images/log-hix-f2.jpg"
                                        alt="" />
                                    <span
                                        class="border box position-relative px-1 top-0 rounded-pill start-50 img"
                                        >${plan.days} روزه</span
                                    >
                                </div>
                                <div>
                                    <p class="px-4">${plan.title}</p>

                                    <p class="px-4">
                                        <ins class="ins-color">${plan.price}</ins>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p class="mt-5">کد تخفیف</p>
                        

                        <div class="px-3">
                            <div
                                class="d-flex flex-row rounded rounded-lg second-color">
                                <div class="d-flex flex-row mt-2 px-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M21.3 10.8399C21.69 10.8399 22 10.5299 22 10.1399V9.20986C22 5.10986 20.75 3.85986 16.65 3.85986H7.35C3.25 3.85986 2 5.10986 2 9.20986V9.67986C2 10.0699 2.31 10.3799 2.7 10.3799C3.6 10.3799 4.33 11.1099 4.33 12.0099C4.33 12.9099 3.6 13.6299 2.7 13.6299C2.31 13.6299 2 13.9399 2 14.3299V14.7999C2 18.8999 3.25 20.1499 7.35 20.1499H16.65C20.75 20.1499 22 18.8999 22 14.7999C22 14.4099 21.69 14.0999 21.3 14.0999C20.4 14.0999 19.67 13.3699 19.67 12.4699C19.67 11.5699 20.4 10.8399 21.3 10.8399ZM9 8.87986C9.55 8.87986 10 9.32986 10 9.87986C10 10.4299 9.56 10.8799 9 10.8799C8.45 10.8799 8 10.4299 8 9.87986C8 9.32986 8.44 8.87986 9 8.87986ZM15 15.8799C14.44 15.8799 13.99 15.4299 13.99 14.8799C13.99 14.3299 14.44 13.8799 14.99 13.8799C15.54 13.8799 15.99 14.3299 15.99 14.8799C15.99 15.4299 15.56 15.8799 15 15.8799ZM15.9 9.47986L9.17 16.2099C9.02 16.3599 8.83 16.4299 8.64 16.4299C8.45 16.4299 8.26 16.3599 8.11 16.2099C7.82 15.9199 7.82 15.4399 8.11 15.1499L14.84 8.41986C15.13 8.12986 15.61 8.12986 15.9 8.41986C16.19 8.70986 16.19 9.18986 15.9 9.47986Z"
                                            fill="#3C096C" />
                                    </svg>
                                    <ins class="mx-2">HixDm</ins>
                                </div>
                                <input class="w-75" type="text" required id="discount" />
                                 <button class="btn btn-light  border-0" onclick="get_dicount(event)">ثبت</button>
                            </div>
                        </div>

                        <div class="container" id="price-section">
                            <div class="mt-5 row">
                                <div class="col">
                                    <p class="px-4">جمع پرداختی</p>
                                </div>
                                <div class="col">
                                    <span>${plan.price} ریال</span>
                                </div>
                            </div>
                            
                        </div>
                        <div class="px-3">
                            <hr />
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <p class="px-4">جمع کل</p>
                                </div>
                                <div class="col">
                                    <span id="full-price">${plan.price * (100 - discountPercent) / 100} ریال</span>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 d-flex flex-column px-5 py-3">
                            <button
                                class="price-btn rounded rounded-pill py-2"
                                onclick="payHandler()">
                                پرداخت آنلاین
                            </button>
                        </div>
    `
    )
}



function payHandler() {
    postRequest(`api/invoice/pay`, {
        id: window.query("invoiceId"),
        discountCode: discountCode && discountCode.trim().length > 0 ? discountCode.trim() : undefined
    })
        .then(function (response) {
            console.log(response.data.paymentUrl);
            window.location.href = response.data.paymentUrl
        }).catch(error => {
            if (error.response.status == 400) {
                alertElement.style.display = "block";
                setTimeout(() => {
                    alertElement.style.display = "none";
                }, 2000);
            }
        })
}


let planPrice = 0;
let discountCode = null;
let discountPercent = 0;

function get_dicount(event) {
    const discount = document.getElementById("discount");

    postRequest(`api/discount/`, {
        discountCode: discount.value.trim(),
    })
        .then(response => {
            console.log(response.data.percent);
            discountCode = discount.value.trim()
            discountPercent = response.data.percent;
            const priceSection = document.getElementById('price-section');
            const fullPrice = document.getElementById('full-price')
            priceSection.insertAdjacentHTML('beforeend', `
        <div class="mt-2 row">
                                <div class="col">
                                    <p class="px-4">تخفیف (${discountPercent}%)</p>
                                </div>
                                <div class="col">
                                    <span>${planPrice * discountPercent / 100} ریال</span>
                                </div>
                            </div>
                            `)

            fullPrice.innerHTML = planPrice * (100 - discountPercent) / 100

            event.target.setAttribute("disabled", true)
            discount.setAttribute("disabled", true)

        }).catch(error => {
            console.log(error);
        })
}

