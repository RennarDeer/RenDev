let noOfCharac = 150;
let contents = document.querySelectorAll(".content");
contents.forEach(content => {
    //If text lenght is less than noOfChara
    //then hide readmore
    if(content.textContent.length < noOfCharac){
            content.nextElementSibling.getElementsByClassName.display = "none";
    }

    else{
        let displayText = content.textContent.slice
        (0,noOfCharac);
        let moreText = content.textContent.slice
        (noOfCharac);
        content.innerHTML = '${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>';

    }
});

function readMore(btn){
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle
    ("hide");
    post.querySelector(".more").classList.toggle
    ("hide");
    
}