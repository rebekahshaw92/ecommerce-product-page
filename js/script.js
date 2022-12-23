amount();
cartDropdown();

const amountText = document.getElementById("amount");


const mediaQuery = window.matchMedia('(min-width: 992px)');

  function openModal(){
    if (mediaQuery.matches) {
    document.getElementById("myModal").style.display = "block";
    }
  }
  
  function closeModal() {
    if (mediaQuery.matches) {
    document.getElementById("myModal").style.display = "none";
    }
  }
  



let sliderIndex = 1;
displaySlide(sliderIndex);


function plusSlides (n) {
  displaySlide(sliderIndex += n);
}

function currentSlide (n) {
  displaySlide(sliderIndex = n);
  const sliderImageThumbnail = document.querySelectorAll(".sliderImageThumbnail");
  sliderImageThumbnail.forEach((el) => el.classList.remove("active-small"));
  sliderImageThumbnail.forEach(el => {
  el.addEventListener('click', (e) => { 
    e.target.closest('.sliderImageThumbnail').classList.add("active-small");
    });
  });

    const sliderImageThumbnailModal = document.querySelectorAll(".sliderImageThumbnailModal");
    sliderImageThumbnailModal.forEach((el) => el.classList.remove("active-small-modal"));
    sliderImageThumbnailModal.forEach(el => {
    el.addEventListener('click', (e) => { 
      e.target.closest('.sliderImageThumbnailModal').classList.add("active-small-modal");
      });
  });
}

function displaySlide(n) {
  const slides = document.getElementsByClassName("slider");
  const mySlider = document.getElementsByClassName("mySlider");
  
  if (n > slides.length) {
    sliderIndex = 1;
  }

  if (n > mySlider.length) {
    sliderIndex = 1;
  }

  if (n < 1) {
    sliderIndex = slides.length;
    sliderIndex = mySlider.length;
  }

  for (let i = 0; i < slides.length; i ++) {
    slides[i].style.display = "none";
  }


  for (let i = 0; i < mySlider.length; i ++) {
    mySlider[i].style.display = "none";
  }

  slides[sliderIndex-1].style.display = "block";
  mySlider[sliderIndex-1].style.display = "block";
  
}


function amount() {
  const amount_plus = document.getElementById("plus");
  const amount_minus = document.getElementById("minus");
  
       amount_plus.addEventListener('click', () => {
        amountText.innerHTML++;
       });

 

       amount_minus.addEventListener('click', (e) => {
       if (amountText.textContent > 0) {
            amountText.innerHTML--;
       }
       }); 
};


function cartDropdown() {
  const cartOverlay = document.getElementById("overlay-cart");
  const emptyCart = document.querySelector(".cartContent");
  const cart = document.querySelector(".add-cart");
  const addToCart = document.getElementById("addCart");
  const cartNumber = document.getElementById("product-number");
  const cartInfo = document.getElementById("cartInfo");
  const btnDelete = document.getElementById("btnDelete");
  const quantity = document.getElementById("quantity");
  const total = document.getElementById("total");

  cart.addEventListener('click', () => {
    cartOverlay.classList.toggle("hidden");
    cartOverlay.classList.toggle("show");
    emptyCart.classList.add("show");
    if (amountText.textContent > 0) {
      emptyCart.classList.remove("show");
    }
  });

  addToCart.addEventListener('click', () => {
    if (amountText.textContent > 0) {
    cartNumber.classList.remove("hidden");
    cartNumber.classList.add("show");
    cartInfo.classList.remove("hidden");
    cartInfo.classList.add("show");
    emptyCart.classList.add("hidden");
    emptyCart.classList.remove("show");

    cartNumber.textContent = amountText.textContent;
    quantity.textContent = amountText.textContent;

    total.textContent = "$" + 125.00 * amountText.textContent + ".00";
    }
  });
  btnDelete.addEventListener('click', () => {
    cartInfo.classList.add("hidden");
    cartInfo.classList.remove("show");
    emptyCart.classList.remove("hidden");
    emptyCart.classList.add("show");
    cartNumber.classList.remove("show");
    cartNumber.classList.add("hidden");
  });
  
}

