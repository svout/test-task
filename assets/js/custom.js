document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const btn = document.getElementById("comment-button");
    const span = document.getElementsByClassName("close")[0];
    const commentList = document.getElementById("comment-list");

    btn.onclick = function () {
        modal.style.display = "block";
    };

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    let storedComments = JSON.parse(localStorage.getItem("comments")) || [];

    function renderComments() {
    
        storedComments.forEach(function (comment, index) {
            renderSingleComment(comment, index);
        });
    }

    function renderSingleComment(commentText, index) {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comments";
        commentDiv.id = "comment" + index;

        const profileDiv = document.createElement("div");
        profileDiv.className = "profile";
        const profileImg = document.createElement("img");
        profileImg.src = "./assets/img/anonim.jpg";
        profileDiv.appendChild(profileImg);
        commentDiv.appendChild(profileDiv);

        const commentContentDiv = document.createElement("div");
        commentContentDiv.className = "comment-content";
        const nameParagraph = document.createElement("p");
        nameParagraph.className = "name";
        nameParagraph.innerHTML = "<font style='vertical-align: inherit;'><font style='vertical-align: inherit;'>User</font></font>";
        commentContentDiv.appendChild(nameParagraph);
        const commentParagraph = document.createElement("p");
        commentParagraph.innerHTML = "<font style='vertical-align: inherit;'><font style='vertical-align: inherit;'>" + commentText + "</font></font>";
        commentContentDiv.appendChild(commentParagraph);
        commentDiv.appendChild(commentContentDiv);

        const commentStatusDiv = document.createElement("div");
        commentStatusDiv.className = "comment-status";
        commentStatusDiv.innerHTML = "<span><font style='vertical-align: inherit;'><font style='vertical-align: inherit;'>Curte·comente</font></font><img src='3.jpg' width='15px' height='15px'><font style='vertical-align: inherit;'><font style='vertical-align: inherit;'>29</font></font></span><font style='vertical-align: inherit;'><small><font style='vertical-align: inherit;'>·</font></small><small><u><font style='vertical-align: inherit;'>4 minutos antes</font></u></small></font><small><font style='vertical-align: inherit;'></font><u><font style='vertical-align: inherit;'></font></u></small>";
        commentDiv.appendChild(commentStatusDiv);

        commentList.prepend(commentDiv);
    }

    renderComments();

    document.getElementById("submit-comment").onclick = function () {
        const commentText = document.getElementById("comment-text").value;
        console.log("Submitted comment:", commentText);

        storedComments.unshift(commentText);
        localStorage.setItem("comments", JSON.stringify(storedComments));

        renderComments();

        modal.style.display = "none";
    };
});
