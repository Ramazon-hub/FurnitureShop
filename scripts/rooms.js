const imgCard = document.querySelector(".js-rooms_imgs"),
  imgs = document.querySelectorAll(".js-rooms_img"),
  modals = document.querySelectorAll(".js-rooms_modal"),
  nextBtn = document.querySelector(".js-rooms__card-btn"),
  roomsBtnBox = document.querySelector(".js-rooms-btn");
widthImg = 372;

let offset1 = 0,
  dotIndex1 = 0;

imgCard.style.width = widthImg * imgs.length + "px";
modals[dotIndex1].classList.add("rooms__box-modal-active");

const dots1 = [];

imgs.forEach((item, i) => {
  const newBtn1 = document.createElement("div");
  newBtn1.classList.add("rooms__btn");
  newBtn1.dataset.id = i;
  roomsBtnBox.appendChild(newBtn1);

  dots1.push(newBtn1);
});
dots1[0].classList.add("rooms__btn-active");

imgs.forEach((img, i) => {
  img.style.width = widthImg + "px";
  img.dataset.id = i;

  if (img.dataset.id == dotIndex1) {
    img.style.transform = "Scale(1.1, 1.2)";
  }
});

nextBtn.addEventListener("click", () => {
  if (offset1 == widthImg * (imgs.length - 1)) {
    offset1 = 0;
  } else {
    offset1 += widthImg;
  }

  imgCard.style.transform = `TranslateX(-${offset1}px)`;

  if (dotIndex1 == imgs.length - 1) {
    dotIndex1 = 0;
  } else {
    dotIndex1 += 1;
  }

  imgs.forEach((img) => {
    img.style.transform = "Scale(1)";

    if (img.dataset.id == dotIndex1) {
      img.style.transform = "Scale(1.1, 1.2) TranslateY(20px)";
    }
  });

  modals.forEach((modal) => {
    modal.classList.remove("rooms__box-modal-active");
  });
  modals[dotIndex1].classList.add("rooms__box-modal-active");

  dots1.forEach((item) => {
    item.classList.remove("rooms__btn-active");
  });
  dots1[dotIndex1].classList.add("rooms__btn-active");
});

dots1.forEach((item) => {
  item.addEventListener("click", (event) => {
    const datasetId = +event.currentTarget.dataset.id;
    dotIndex1 = datasetId;

    offset1 = widthImg * datasetId;

    imgCard.style.transform = `TranslateX(-${offset1}px)`;

    imgs.forEach((img) => {
      img.style.transform = "Scale(1)";

      if (img.dataset.id == dotIndex1) {
        img.style.transform = "Scale(1.1, 1.2) TranslateY(20px)";
      }
    });

    modals.forEach((modal) => {
      modal.classList.remove("rooms__box-modal-active");
    });
    modals[dotIndex1].classList.add("rooms__box-modal-active");

    dots1.forEach((item) => {
      item.classList.remove("rooms__btn-active");
    });
    dots1[dotIndex1].classList.add("rooms__btn-active");
  });
});
