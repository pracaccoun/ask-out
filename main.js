let wrapper = document.querySelector(".wrapper");
let question = document.querySelector(".que");
let b = document.querySelector("#btn");
let b1 = document.querySelector("#btn-1");
let i = document.querySelector("#image");
let wrapperRect = wrapper.getBoundingClientRect();
let b1buttonRect = b1.getBoundingClientRect();
b.addEventListener("click", () => {
  question.innerHTML = "yaaaaaaaaaaaaaaaay ,I Love You! 💖 ";
  i.src =
    "https://gifdb.com/images/high/bear-love-bouncing-mocha-with-flowers-n4m0fyne6h4e6y2x.gif";
});
b1.addEventListener("mouseover", () => {
  let j =
    Math.floor(Math.random() * (wrapperRect.width - b1buttonRect.width)) + 1;
  let k =
    Math.floor(Math.random() * (wrapperRect.height - b1buttonRect.height)) + 1;
  b1.style.left = j + "px";
  b1.style.top = j + "px";
  b1.disabled = true;
});
