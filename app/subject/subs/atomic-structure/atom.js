const protonTooltip = () => {
  const tooltip = document.querySelector(".proton-tooltip");
  const proton = document.querySelectorAll(".proton");

  proton.forEach(elem => {
    elem.addEventListener("mouseover", ()=> {
      tooltip.classList.remove("opacity-0")
      tooltip.classList.remove("translate-0")
      tooltip.classList.remove("hidden")

      tooltip.classList.add("opacity-100")
      tooltip.classList.add("-translate-10")
      tooltip.classList.add("visible")
    })
    elem.addEventListener("mouseleave", ()=> {
      tooltip.classList.add("opacity-0")
      tooltip.classList.add("translate-0")
      tooltip.classList.add("hidden")

      tooltip.classList.remove("opacity-100")
      tooltip.classList.remove("-translate-10")
      tooltip.classList.remove("visible")
    })
  })
}

export default protonTooltip