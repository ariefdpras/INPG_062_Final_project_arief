const ReadMore = (n) => {
    let dots = document.getElementById(`dot${n}`);
    let moreText = document.getElementById(`mr${n}`);
    let btnText = document.getElementById(`btnMore${n}`);
    // console.log(dots.id);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}

const init = () => {
    for (let i = 1; i <= 4; i++) {
        const current = document.getElementById(`mr${i}`);
        current.style.display = "none";
    }
}
