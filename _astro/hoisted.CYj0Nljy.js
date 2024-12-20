const e=document.querySelectorAll("[data-navLink]");e.forEach(t=>{t.getAttribute("href")===window.location.pathname&&t.setAttribute("aria-current","page")});
