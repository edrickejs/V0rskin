let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

function validateForm() {
  let email = document.forms["myForm"]["email"].value;
  let fullname = document.forms["myForm"]["fullname"].value;
  let phone = document.forms["myForm"]["phone"].value;
  let preference = document.forms["myForm"]["preference"].value;
  let agreement = document.forms["myForm"]["agreement"].value;
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }else if(fullname == ""){
    alert("Full Name must be filled out");
    return false;
  }else if(phone == ""){
    alert("Phone Number must be filled out");
    return false;
  }else if(preference == ""){
    alert("Preference must be choose out");
    return false;
  }else if(agreement == ""){
    alert("Please check the agreement");
    return false;
  }else{
    alert("Thanks for subscribing!");
  }
}