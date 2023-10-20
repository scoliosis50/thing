const coll = document.querySelectorAll(".collapsible")
let i;

for(i=0; I <coll.length; i++){
  coll[I].addEventListener("click", function() {
    this.classList.toggle("activate);
    const content = this.nextElementSibling
    if (content.style.display === "block) {
        content.style.display = "none;
  } else {
    content.style.display = "block";
  }
});
}
  
    
