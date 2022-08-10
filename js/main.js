let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null){
  let delay = 500;//задержка
  let body=document.querySelector("body");
  let menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", (e) => {
          iconMenu.classList.toggle("_active");
          menuBody.classList.toggle("_active");
  });
};
function menu_close(){
  let iconMenu = document.querySelector(".icon-menu");
  let menuBody = document.querySelector(".menu__body");
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
}