export default function dashboardScript() {
    const dashArrow = document.querySelector(".dashArrow");
    const dashBoard = document.querySelector(".dashboardM");
  
    dashArrow.onclick = () => {
      dashBoard.classList.toggle("-translate-x-full");
      dashArrow.textContent = dashBoard.classList.contains("-translate-x-full") ? ">" : "<";
    };
  }
  
  