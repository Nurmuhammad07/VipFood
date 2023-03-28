const humBtn = document.querySelector('.hum_btn')
const humExitBtn = document.querySelector('.hum_exit_btn')

humExitBtn.addEventListener('click', hideHum)
humBtn.addEventListener('click', showHum)

let humBox = document.querySelector('.hum_box')
let main = document.querySelector('main')

function showHum(){
    humBox.style.cssText = `
        width: 100%;
        opacity: 1;
        background: #fff;
        height: 100vh;
        display: flex;
        position: fixed;
        align-items: center;
        transform: translateX(0%);
    `

    let boxWRapper = document.querySelector('.box_wrapper')
    boxWRapper.style.cssText = `
        left: 10%;
        margin: 0 auto;
        width: 80%;
        height: 80%;
        display: flex;
        justify-content: center; 
        align-items: center;
    `

    let humList = document.querySelector('.hum_list')
    humList.style.cssText = `
        list-style:none;
        width: 80%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
    `

    let humListLi = document.querySelectorAll('.hum_list li')
    humListLi.forEach(li => {
        li.style.cssText = `
            width: 160%;
            font-size: 35px;
            border-bottom: 1px solid;
            padding: 20px 0px;
        `
    });

    main.style.display = 'none'
}

function hideHum(){
    humBox.style.cssText = `
        width: 100%;
        opacity: 0;
        background: #fff;
        height: 100vh;
        display: flex;
        position: fixed;
        align-items: center;
        transform: translateX(100%);
    `

    main.style.display = 'block'
}