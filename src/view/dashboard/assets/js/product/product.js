var currentPage = 1
var postsPerPage = 100
var allPosts = []
var pageNumbers = [];
var paginationContainer = document.getElementById("pagination-container")

onloadData()
async function onloadData() {
    const user_plan_id = await getCurrentUser()
    allPosts = await getRequest(`api/product?upid=${user_plan_id}`).then((res) => res.data.data)
    var paginateddata = await paginatedData()
    displayData(paginateddata)
}

async function changePagination(number) {
    currentPage = number
    var paginateddata = await paginatedData()
    displayData(paginateddata)
}

async function paginatedData() {
    var indexOfLastPost = currentPage * postsPerPage;
    var indexOfFirstPost = indexOfLastPost - postsPerPage;
    var currentPosts = await allPosts.slice(indexOfFirstPost, indexOfLastPost);
    return currentPosts
}

async function displayData(posts) {
    const rowParent = document.getElementById("dynamic");
    rowParent.innerHTML = ""
    posts.forEach((post) => {
        const postRow = document.createElement("tr");
        postRow.classList.add("tr_contact");
        postRow.innerHTML = `
        <th scope="row">
                        ${post.id}
                        </th>
                        <td>${post.title}</td>
                        <td> <a class='list-group-item btn btn-primary' href="${post.url}" >
                              لینک
                            </a>
                    </td>`
        postRow.addEventListener("click", () => {
            modalOpen(post)
        });

        rowParent.insertAdjacentElement('beforeend', postRow);
    })
    pagination()
}

async function pagination() {

    paginationContainer.innerHTML = ""
    pageNumbers = []
    for (let i = 1; i <= Math.ceil(allPosts.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    var navTag = document.createElement("nav")
    var ulTag = document.createElement("ul")
    ulTag.setAttribute("class", "pagination")
    pageNumbers.map(number => (
        ulTag.innerHTML +=
        `
            <li class="page-item${currentPage == number ? ' active' : ''}" style="cursor: pointer;">
                <span onClick="changePagination(${number})" class='page-link'>
                    ${number}
                </span>
            </li>   
            `
    ))
    navTag.appendChild(ulTag)
    paginationContainer.appendChild(navTag)
}

const modalItem = document.querySelector(".active_modal");
const modalClose = document.getElementById("close-modal");
const cotentModal = document.getElementById("cotent-modal");

modalClose.addEventListener("click",()=>{
    modalItem.classList.add("active_modal")
    cotentModal.innerHTML = ""
})

function modalOpen(post) {
    const content_btn = document.querySelector(".content_btn")
    const btn = document.createElement("button")
    const btnRemove = document.createElement("button")
    btn.classList.add("btn btn-primary")
    btnRemove.classList.add("btn btn-primary")


    console.log(post);
    modalItem.classList.remove("active_modal")
    cotentModal.insertAdjacentHTML("beforeend",
    `
        <div class="item-caption col-12">
                <h3>عنوان</h3>
                <div class="d-flex align-items-center justify-content-between w-100 gap-5">
                    <h5 class="w-100">
                    
                    <textarea  name="story" rows="5" cols="33" id="description">
                            ${post.description}
                    </textarea>
                    </h5>
                <img src="${post.image}"
                class="bg-info"                
                alt="not" style="width:70px;hight:70px; border:.7px solid black;padding: 10px 20px;border-radius: 10px;">
                <input type="file" placeholder="انتخاب عکس" id="imgSend" />
                </div>
            </div>
            <div class="item-caption ">
                <h3>برند</h3>
                <h5>
                   <input type="text" value="${post.brand}" id="brand" /> 
                </h5>
            </div>
            <div class="item-caption ">
                <h3>قیمت</h3>
                <h5 class="btn btn-success ">
                   <input type="text" value="${post.price}" id="price" />
                </h5>
            </div>
            <div class="align-self-end content_btn">
                <button class="btn btn-primary" onclick="editeContent()">ویرایش</button>
                <button class="btn btn-danger" onclick="removeContent()">حذف</button>
            </div>
    `
    )
    btn.addEventListener("click", () => {
        editeContent(post.id)
    })

    btnRemove.addEventListener("click",()=>{
        removeContent(post.id)
    })

    content_btn.insertAdjacentElement('beforeend', btn);

}

function editeContent (id) {
    const description = document.getElementById("description").value
    const image = document.getElementById("imgSend").value
    const brand = document.getElementById("brand").value
    const price = document.getElementById("price").value

    putRequest(`api/prodcut/${id}`,{
        description,
        image,
        brand,
        price
    })
}

function methodName (id) {
    delRequest(`api/product/${id}`)
}