const HAMBURGER = document.getElementsByClassName("yellow-box-end")[0];
const NAV_BOX = Array.from(document.getElementsByClassName("yellow-box"))
let navShown = false;
HAMBURGER.addEventListener("click", displayDropDown);




function displayDropDown(){

 console.log("toggling drop down");
    if(navShown == false)
    {
        navShown = true;
        for(let i = 0; i < NAV_BOX.length; i++)
        {
            setTimeout(() =>
            {
                $(NAV_BOX[i]).fadeIn("fast");
            }, 15 * i
            )
            
        }
    }
    else
    {
        hideDropDown();
    }
}

$(document).ready(function(){


}
)

function hideDropDown(){
    navShown = false;
    for(let i = 0; i < NAV_BOX.length; i++)
    {
      $(NAV_BOX[i]).hide();
      
    }
}