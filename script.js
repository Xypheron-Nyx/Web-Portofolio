// theme-start
const toggle = document.getElementById("toggle-container");
const body = document.body;
const theme = document.querySelector(".img-theme");

function updatetheme() {
  if (body.classList.contains("dark-theme")) {
    theme.src = "img/sun.svg";
    theme.alt = "icons-theme";
  } else {
    theme.src = "img/moon.svg";
    theme.alt = "icons-theme";
  }
}

toggle.addEventListener("click", function () {
  body.classList.toggle("dark-theme");
  updatetheme();
});

// 1.jika diklik maka :
// 2.cek apakah body punya class dark-theme
// 3.jika tidak ada maka tambakan jika ada hapus
// 4.lalu sesuaikan icons dengan theme yang ada
// note : merek melakukan 2 tugas yang berbeda btw

// theme-end

// menu-items start
const humbIcon = document.getElementById("humb-container");
const menuItems = document.getElementById("menuList");

humbIcon.addEventListener("click", function () {
  menuItems.classList.toggle("visible");
});

// 1.jika icons humbIcon di klik maka:
// 2. tambahkan class visible pada rightNav(class sudah ada di css btw)
// note : .a.b = masih 1 element html | contoh : <div class="a b"></div>
// .a .b maka .a punya child dengan class .b | contoh : <div class="a"><div class="b"></div>

// menu-items end
