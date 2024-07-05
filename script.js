
const btn = document.getElementById('menu-btn')
const ovelay = document.getElementById('overlay')
const menu = document.getElementById('mobilemenu')
const counts = document.querySelectorAll('.counter')
let scrollstarted = false

btn.addEventListener('click', navToggle)
document.addEventListener('scroll', scrollUp)


// humburger button
function navToggle(){

    btn.classList.toggle('open')
    ovelay.classList.toggle('overlay-show')
    document.body.classList.toggle('stop-scrolling')
    menu.classList.toggle('show-menu')
}

// page scrollup

function scrollUp(){

    const scrollP = window.scrollY;
    
    if(scrollP > 100 && !scrollstarted){
        countUp();
        scrollstarted=true
    }
    else if(scrollP <  100 && scrollstarted)
    {
            reset();
            scrollstarted=false
    }
}


// reset value 0 when scrolly is more then 100
function reset(){
    counts.forEach((count) => count.innerText = '0' )

}


// counter increment
    function  countUp(){

        counts.forEach((count)=> {
            count.innerText='0' 


            function updateCount(){
               const target =  +count.getAttribute('data-target');

               const c = +count.innerText;

               const increment = target / 100

               if(c < target){

                count.innerText = `${Math.ceil(c + increment)}`;
                
                setTimeout(updateCount, 75);

               }
            else 
                {
                    count.innerText = target;
                }

            }

            updateCount()
        })

    }

   
