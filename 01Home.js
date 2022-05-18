const body = document.querySelector("body"), 
      sidebar = body.querySelector(".sidebar"), 
      toggle = body.querySelector(".toggle"), 
      searchBtn = body.querySelector(".search-box"), 
      modeSwitch = body.querySelector(".toggle-switch"), 
      modeText = body.querySelector(".mode-text");
      dashboard = body.querySelector(".homeCard");
      logo = body.querySelector("image-text");
      homeLink = document.getElementById("homeLink");
      
      homeLink.addEventListener("click", () =>{
        if (sidebar.classList.contains("close")) {
          location.href="02ToDoList.html";
          homeLink.style.backgroundColor = "#18191A";
          homeLink.style.borderRadius = "6px";
          sidebar.classList.add("close");
        } else {
          location.href="02ToDoList.html";
          homeLink.style.backgroundColor = "#18191A";
          homeLink.style.borderRadius = "6px";
          sidebar.classList.remove("close");
        }
      })
      
      
      
      




// logo.addEventListener("click", () =>{
//   window.location.reload;
// });



toggle.addEventListener("click", () =>{
  sidebar.classList.toggle("close");
});
searchBtn.addEventListener("click", () =>{
  sidebar.classList.remove("close");
});
dashboard.addEventListener("click", () =>{
  sidebar.classList.add("close");
});

modeSwitch.addEventListener("click", () =>{
  body.classList.toggle("dark");
  if(body.classList.contains("dark")){
    modeText.innerText = "Light Mode"
  } else{
    modeText.innerText = "Dark mode"
  }
});

// 동기방식으로 하기 때문에 안된다고 한다.
// 비동기를 보니 ajax와 jason이 있는데 Deep dive로 비동기를 공부해야한다고 한다.
// homeLink.addEventListener("click", () =>{
//   if (sidebar.classList.contains("close")) {
//     location.href="02ToDoList.html";
//     homeLink.style.backgroundColor = "#18191A";
//     homeLink.style.borderRadius = "6px";
//     sidebar.classList.add("close");
//   } else {
//     location.href="02ToDoList.html";
//     homeLink.style.backgroundColor = "#18191A";
//     homeLink.style.borderRadius = "6px";
//     sidebar.classList.remove("close");
//   }
// })



