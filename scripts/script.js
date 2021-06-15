const text = document.querySelector(".text");

var cup = [
    "سلام به وبسایت من خوش آمدید",
    "برای دیدن محصولات لطفا به قسمت محصولات بیشتر مراجعه فرمایید",
];

const arr = cup[0].split("");

var i = 0;

setInterval(() => {
    if (i < arr.length) {
        text.innerHTML += arr[i];
        i++;
    } else {
        text.innerHTML = "";
        i = 0;
    }
}, 200);