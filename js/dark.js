var icon = document.getElementById("dark-icon")

window.onload = function() {
    if (localStorage.getItem('dark')) {
      icon.src = "img/dark_toggle.png"
      document.body.classList.add('dark')
    }
    else {
      icon.src = "img/dark_non-toggle.png"
      document.body.classList.remove('dark')
    }
  }

icon.onclick = function(){
    document.body.classList.toggle("dark")
    if(document.body.classList.contains("dark")){
        icon.src = "img/dark_toggle.png"
        localStorage.setItem('dark', true)
    }
    else{
        icon.src = "img/dark_non-toggle.png"
        localStorage.removeItem('dark');
    }
}