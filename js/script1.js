





function showMenu(toggling, navbar){
const toggle = document.getElementById(toggling),
nav = document.getElementById(navbar),
navLink = document.querySelectorAll(".nav_list a"),
body  = document.querySelector("main")  
function toToggle(){
    toggle.classList.toggle("toggle")
    nav.classList.toggle("show_menu")
} 
console.log(nav)
if (toggle && nav){
            console.log("toggle")
            toggle.addEventListener('click', () => {
                toToggle()
                if(nav.classList.contains("show_menu")){ 
                    body.addEventListener("click",()=>{
                        toggle.classList.remove("toggle")
                        nav.classList.remove("show_menu")
                        console.log('active')
                    })
                }else{
                    body.removeEventListener("click",()=>toToggle())
                }
        
            })
            navLink.forEach(element =>{
                element.addEventListener("click",()=>toToggle())
            })
    
     
    }
}
showMenu("btn", "nav")


function toggleMode(wholeBody, list){
    const body = document.getElementById(wholeBody);
    // console.log(body)
    const modeButton = document.getElementById(list);
    // console.log(modeButton)
    if(body && modeButton){
        modeButton.addEventListener("click", ()=>{
        // console.log('click')
       body.classList.toggle('light')

        })
    }

}

toggleMode("body", "list_btn")
toggleMode("body", "list_btn1")







function clickActivateMenu(){
    const page = window.location.pathname,
          navLink = document.querySelectorAll(".list_item > a");
    // console.log(navLink)
    navLink.forEach(links =>{

     links.addEventListener("click", ()=>{
        if(links.href.includes(`${page}`)){
            links.classList.add("active")
        }})
        
    })
}
clickActivateMenu()


function scrollActivateMenu(){
    const navLink = document.querySelectorAll(".list_item > a"),
          sections = document.querySelectorAll("section")
    let currentSection = "home"     
    window.addEventListener('scroll', ()=>{
        sections.forEach(sect =>{
            if(window.scrollY >= sect.offsetTop){
                currentSection = sect.id;
            }
        })
        navLink.forEach(links=>{
            if (links.href.includes(currentSection) ){
                links.classList.add("active")
            }else{
                links.classList.remove("active")
            }
        })
    })

}

scrollActivateMenu()






function toggleSkills(button, roundedSkills, activeButton, activeDiv, styl){
    const roundedSquare = document.querySelectorAll(roundedSkills)
    const display = document.querySelectorAll(button);
    console.log(roundedSquare)
    roundedSquare[0].classList.add(activeDiv)
    console.log(display)
    display.forEach((element, id) => {
        element.addEventListener("click", ()=>{
            display.forEach(btn => btn.classList.remove(activeButton));
            element.classList.add(activeButton)
            roundedSquare.forEach(div =>{
                div.style.display = "none"
            })
            roundedSquare[id].style.display = styl
        })
    })


}

toggleSkills(".btn_group  button", ".rounded_skills", "btn_active", "active-div", "grid")
// toggleSkills(".project_btn", ".proj", "active_project", "first", "flex")

function loadingAnimatio(number, percentage, mm){
    changeCount = document.querySelectorAll(".btn_group  button")
    let num = document.getElementById(number);
    console.log(num)
    let count = 1
    setInterval(()=>{
        if( count === percentage){
            clearInterval()
        }else{
            count += 1
            num.innerHTML = count + "%"
        }
    }, mm)
    changeCount.forEach(element =>{
        element.addEventListener("click", ()=> count = 1)
    })
}

loadingAnimatio('number_html', 90, 23)
loadingAnimatio('number_css', 85, 29)
loadingAnimatio('number_javascript', 65, 29)
loadingAnimatio('number_react', 75, 29)
loadingAnimatio('number_python', 90, 23)
loadingAnimatio('number_java', 50, 30)
loadingAnimatio('number_javascript_backend', 60, 29)
loadingAnimatio('number_ui_ux', 80, 26)
loadingAnimatio('number_sql', 80, 26)



// const sections = document.querySelectorAll("section")
// console.log(sections)
// function checkState(){
//     sections.forEach(section =>{
//         const sectionTop =section.getBoundingClientRect().top;
//         const sectionBottom =section.getBoundingClientRect().bottom;
//         const windowHeight = window.innerHeight;
//         if(sectionTop < windowHeight && sectionBottom >=0){
//             section.style.opacity = 1;
//         }

//     })
// }

// window.addEventListener("scroll", checkState)
// window.addEventListener("load", checkState)


// $(document).ready(function(){
//     var controller = new ScrollMag
// })

// function toggleProject(){
//     btns = document.querySelectorAll(".project_btn");

//     btns.forEach((btn, no)=> {

//         btn.addEventListener("click", ()=>{
//             if(no == 0){
//                 btn.classList.add('active_project');

//             }else if(no == 1){
//                 btn.classList.add('active_project')
//             }else{
//                 btn.classList.remove('active_project');

//             }
//         })
//     });

// }

// toggleProject()