let li = ['a', 'A', 'e', 'E', 'I', 'i', 'o', 'O', 'u', 'U'];
let vowels = 0
let consonants = 0
let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    let a = document.querySelector("#input").value;
    let len = document.querySelector("#length");
    len.textContent = a.length;
    let upper = document.querySelector("#upper");
    upper.textContent = a.toUpperCase();

    let lower = document.querySelector("#lower");
    lower.textContent = a.toLowerCase();
    let words = document.querySelector("#words");
    // let wCount = 0;
    // for (let i = 0; i < a.length; i++) {
    //     if (a[i] == " ")
    //         wCount++;
    // }
    // words.textContent = wCount;

    let str = a.trim()
    let count = 0
    let word = str.split(" ")
    for (let i = 0; i < word.length; i++) {
        count++;
    }
    words.innerHTML = "Total words: " + count
    let vo = document.querySelector("#vCount")
    let conso = document.querySelector("#cCount")
    for (let i = 0; i < a.length; i++) {
        if (li.includes(a[i])) { vowels++; } else
            consonants++;
    }
    vo.textContent = vowels;
    conso.innerHTML = consonants;

    let came = document.querySelector("#camel")
    let cCase = a.trim().split(" ")
    let element = cCase[0].toLowerCase()

    for (let i = 1; i < cCase.length; i++) {
        element += cCase[i].charAt(0).toUpperCase() + cCase[i].slice(1).toLowerCase();
    }
    came.textContent = element;

    let mid = document.querySelector("#mchar")
    if (a.length % 2 === 0) {
        let b1 = (a.length / 2 - 1)
        let b2 = (a.length / 2)
        mid.textContent = a[b1] + a[b2];
    } else {
        let one = (a.length / 2)
        mid.textContent = a[one];
    }
})