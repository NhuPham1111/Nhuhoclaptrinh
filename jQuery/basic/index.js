// alert("working");
$("h1").css("color", "black");

//1. Selecting Element with Js and jQuery
// Vanilla JavaScript
document.querySelector("h1");
const title = document.querySelector("#title");

// jQuery
$("h1");
const $title = $("#title");

// =======================================================================
//2. Manipulating styles with jQuery
// $("h1").css("color", "blue");
// $("h1").css("font-size", "3rem");

//Them css da duoc khai bao san trong styles.css
$("h1").addClass("big-title margin-100"); //Co the them nhieu styles da duoc khai bao
$("h1").removeClass("big-title");

// ======================================================================
//3. Manipulating text with jQuery
$("button").text("kkk");
$("button").html("<em>Hi</em>");

// ======================================================================
//4. Manipulating Atributes with jQuery
//Lay gia tri cua thuoc tinh
console.log($("img").attr("src"));

//Set gia tri cua thuoc tinh (Mot class cung la html attributes)
$("a").attr(
  "href",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKlzNVb0nhc_FiO_0F4eHcIP6oQDa8OaqVrfSJr6jqdg&s=10",
);

// ===================================================================
//5. Add event listeners with jQuery
// $("h1").click(function () {
//   $("h1").css("color", "green");
// });

//Vd add event listener with Vanila Javascript cho 5 button
// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "purple";
//   });
// }

//vd add event listener with jQuery (ko quan tam den for loop nhu Js)
$("button").click(function () {
  $("h1").css("color", "red");
});

//Theo doi Keypress cua input
$(document).keypress(function (event) {
  $("h1").text(event.key);
  //   console.log(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});

// =============================================================
//6. adding and removing element with jQuery
//Them phan tu moi vao truoc va sau phan tu da chon
$("h1").before("<button>before</button>");
$("h1").after("<button>after</button>");

//Them phan tu vao truoc va sau phan tu da chon h1 (nam truc tiep trong noi dung h1)
$("h1").prepend("<button>prepend</button>");
$("h1").append("<button>append</button>");

//remove elements: xoa bo tat ca phan tu la button
// $("button").remove();

//=============================================================
//7. Website annimation withjQuery
//Vd them hieu ung Up, Down, va Toggle dang dropdown
$("button").on("click", function () {
  //   $("h1").slideUp();
  //   $("h1").slideDown();
  $("h1").slideToggle();
});
// $("h1").fadeIn();

//Vd Animation co the them truc tiep css vao
$("button").on("click", function () {
  //   $("h1").animate({ opacity: "0.5" });
  $("h1").slideUp().slideDown().animate({ opacity: "0.5" });
});
