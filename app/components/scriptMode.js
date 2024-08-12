export default function callClick() {
    const toggleMod = document.querySelector(".toggleMode");
    const html = document.body;
    html.classList.add("scroll-smooth")
    // Initialize dark mode class
    console.log("clicker");    
        toggleMod.onclick = function(){
            if(html.classList.contains("dark")){
                html.classList.remove("dark");
                html.classList.remove("bg-slate-700");
                html.classList.add("bg-white");

            }
            else{
                html.classList.add("dark");
                html.classList.add("bg-slate-700");
                html.classList.remove("bg-white");
            }
        }
    
  }
  