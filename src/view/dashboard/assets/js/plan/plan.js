import { dataPanel, dataPanelTwo, dataPanelThree } from "./dataP.js";

const tableContainer = document.querySelector('#table_container')
const tableBody = document.querySelector("#dataPlansTable");
const tableBodyTwo = document.querySelector("#dataPlansTabletwo");
const tableBodyThree = document.querySelector("#dataPlansTablethree");
const table_link = document.querySelector('.tabcontent_month');

const darad = `<svg style="width: 30px; height: 30px;border-radius : 50%;background-color: #55e655;fill:white;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>`;
const nadarad = `<svg style="width: 30px; height: 30px;border-radius : 50%;background-color: red;fill:white;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M5 11h14v2H5z"></path></svg>`

tableBody.insertAdjacentHTML("beforeend",
    Object.getOwnPropertyNames(dataPanel).map(item => {
        return `<tr class="text-center ">
              <td>${typeof dataPanel[item][2] == 'string' ? dataPanel[item][2] : dataPanel[item][2] ? darad : nadarad}</td>
              <td>${typeof dataPanel[item][1] == 'string' ? dataPanel[item][1] : dataPanel[item][1] ? darad : nadarad}</td>
              <td>${typeof dataPanel[item][0] == 'string' ? dataPanel[item][0] : dataPanel[item][0] ? darad : nadarad}</td>
              <td>${item}</td>
          </tr>
            `
    }).join("")

)


tableBodyTwo.insertAdjacentHTML("beforeend",
    Object.getOwnPropertyNames(dataPanelTwo).map(item => {
        return `<tr class="text-center">
              <td>${typeof dataPanelTwo[item][1] == 'string' ? dataPanelTwo[item][1] : dataPanelTwo[item][1] ? darad : nadarad}</td>
              <td>${typeof dataPanelTwo[item][0] == 'string' ? dataPanelTwo[item][0] : dataPanelTwo[item][0] ? darad : nadarad}</td>
              <td>${item}</td>
          </tr>
            `
    }).join("")

)

tableBodyThree.insertAdjacentHTML("beforeend",
    Object.getOwnPropertyNames(dataPanelThree).map(item => {
        return `<tr class="text-center">
              <td>${typeof dataPanelThree[item][1] == 'string' ? dataPanelThree[item][1] : dataPanelThree[item][1] ? darad : nadarad}</td>
              <td>${typeof dataPanelThree[item][0] == 'string' ? dataPanelThree[item][0] : dataPanelThree[item][0] ? darad : nadarad}</td>
              <td>${item}</td>
          </tr>
            `
    }).join("")

)


