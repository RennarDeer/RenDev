var readMoreBtn = document.getElementById("read-more-btn1");
var articleMore = document.getElementById("article-more1");

readMoreBtn.addEventListener("click", function() {
    if (articleMore.style.display === "none") {
        articleMore.style.display = "block";
        readMoreBtn.innerText = "Read Less";
    } else {
        articleMore.style.display = "none";
        readMoreBtn.innerText = "Read More";
    }
});