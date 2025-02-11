const coordinates = {
  getBlockCoordinates: (block) => {
    return {
      start: block.offsetTop,
      end: block.offsetTop + block.scrollHeight,
    };
  },
  screenDevice: () => {
    return {
      start: window.pageYOffset,
      end: window.pageYOffset + window.innerHeight,
    };
  },
};

const commentWrapper = document.querySelector(".comments__kma"),
  commentWrite = document.querySelector(".comment-write"),
  commentWriteSecond = document.querySelector(".comment-write-second"),
  blockComment = document.querySelector(".comment-hide"),
  blockCommentSecond = document.querySelector(".comment-hide-second"),
  heightCommnet =
    Math.abs(
      coordinates.getBlockCoordinates(blockComment).start -
        coordinates.getBlockCoordinates(blockComment).end
    ) + 30;

window.onscroll = () => {
  if (
    coordinates.getBlockCoordinates(commentWrite).start <
    coordinates.screenDevice().end
  ) {
    this.onscroll = null;
    setTimeout(() => {
      commentWrite.style.maxHeight = "0";
      commentWrite.style.margin = "0";
      commentWrite.style.padding = "0";
      commentWrite.style.border = "none";
      commentWrapper.style.marginTop = "0";
      setTimeout(() => {
        blockComment.classList.remove("comment-hide");
        setTimeout(() => {
          commentWriteSecond.style.maxHeight = "0";
          commentWriteSecond.style.margin = "0";
          commentWriteSecond.style.padding = "0";
          commentWriteSecond.style.border = "none";
          commentWriteSecond.style.display = "none";
          commentWrapper.style.marginTop = "0";
          setTimeout(() => {
            blockCommentSecond.classList.remove("comment-hide-second");
          }, 300);
        }, 2000);
      }, 300);
    }, 2000);
  }
};

//Иногда лучше в if
var bodyRect = document.body.getBoundingClientRect(),
  elemRect = commentWrite.getBoundingClientRect(),
  offset = elemRect.top - bodyRect.top - 300;

$(document).ready(function () {
  $(".comment-date").each(function () {
    var d = new Date();
    d.setDate(d.getDate() - $(this).data("num"));
    $(this).text(d.toLocaleString().split(",")[0]);
  });
});

$(".sendcomment").click(function () {
  $(".error").hide();
  let name = $("#textboxname").val();
  let message = $("#textboxtext").val();
  if (name == "") $("#textboxname").next().show();
  else if (message == "") $("#textboxtext").next().show();
  else {
    let comments = $(".comments__kma");
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    today = dd + "." + mm + "." + yyyy;

    let item = $(`
            <div class="mycomment">
                <img class="mycomment-img" src="forComments/a0.jpg" alt="">
                <div class="mycomment-info">
                    <div class="mycomment-info__inner">
                        <p class="mycomment-name">${name}</p>
                        <p class="mycomment-text">${message}</p>
                        <a href="">
                        <div class="like-count like-count_added">
                            <img class="icon__small m-0" src="forComments/i-heart.webp" >
                        </div></a>
                    </div>
                    <p class="mycomment-bottom"><a href="">Like</a><a href="">Reply</a><span class="comment-date">${today}</span></p>
                </div>
            </div>
        `);
    comments.prepend(item);

    $("#textboxname, #textboxtext").val("");
    $(".error").hide();
    $(".add-comm").hide(500);
    var likeAdded = document.querySelector(".like-count_added");
    likeAdded.addEventListener("click", function (event) {
      event.preventDefault();
      likeAdded.classList.toggle("liked");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var likeCounts = document.querySelectorAll(".like-count");
  likeCounts.forEach(function (likeCount) {
    likeCount.addEventListener("click", function (event) {
      event.preventDefault();
      likeCount.classList.toggle("liked");
    });
  });
});
