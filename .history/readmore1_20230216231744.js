var readMoreBtn = document.getElementById("read-more-btn");
var articleMore = document.getElementById("article-more");

readMoreBtn.addEventListener("click", function() {
    if (articleMore.style.display === "none") {
        articleMore.style.display = "block";
        readMoreBtn.innerText = "Read Less";
    } else {
        articleMore.style.display = "none";
        readMoreBtn.innerText = "Read More";
    }
});