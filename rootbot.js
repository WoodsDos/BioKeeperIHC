const sidebar = document.querySelector(".menu-left");
const openSidebarButton = document.querySelector(".open-sidebar");
const closeSidebarButton = document.querySelector(".close-sidebar");


function toggleSidebar() {

    sidebar.classList.toggle("sidebarOpened");
    if  (sidebar.classList.contains("sidebarOpened")){
        openSidebarButton.style.display = "none";
        closeSidebarButton.style.display = "block"; 
        sidebar.style.display = "block";
 } else{
    openSidebarButton.style.display = "block";
    closeSidebarButton.style.display = "none";
    sidebar.style.display = "none";

 }


};





openSidebarButton.addEventListener("click", toggleSidebar);

closeSidebarButton.addEventListener("click", toggleSidebar);


window.addEventListener("resize", function () {
    if (window.innerWidth > 1100) {
      sidebar.classList.remove("sidebarOpened");
      openSidebarButton.style.display = "none";
      closeSidebarButton.style.display = "none";
      sidebar.style.display = "block";
    } else {
      openSidebarButton.style.display = "block";
      sidebar.style.display = "none";
    }
  });
  
