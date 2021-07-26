const tipsBox = document.querySelector(".tips__slider-box"),
  tipsImgs = document.querySelector(".tips__slider-box-imgs"),
  tipsBoxLists = document.querySelectorAll(".tips__slider-list"),
  btnPrev = document.querySelector(".tips__slider-btn-prev"),
  btnNext = document.querySelector(".tips__slider-btn-next"),
  btnDotsBox = document.querySelector(".tips__slider-btns"),
  width = window.getComputedStyle(tipsBox).width;

let offset = +width.slice(0, width.length - 2) * 2,
  dotIndex = 2;

tipsImgs.style.transform = `TranslateX(-${offset}px)`;

const dots = [];

tipsBoxLists.forEach((item, i) => {
  const newBtn = document.createElement("div");
  newBtn.classList.add("tips__slider-btn");
  newBtn.dataset.id = i;
  btnDotsBox.appendChild(newBtn);

  dots.push(newBtn);
});
dots[2].classList.add("tips__slider-btn-active");

tipsBoxLists.forEach((item) => {
  item.style.width = width;
});

tipsImgs.style.width = tipsBoxLists.length * 100 + "%";

btnNext.addEventListener("click", () => {
  if (offset == +width.slice(0, width.length - 2) * (tipsBoxLists.length - 1)) {
    offset = 0;
  } else {
    offset += +width.slice(0, width.length - 2);
  }

  tipsImgs.style.transform = `TranslateX(-${offset}px)`;

  if (dotIndex == dots.length - 1) {
    dotIndex = 0;
  } else {
    dotIndex += 1;
  }

  dots.forEach((item) => {
    item.classList.remove("tips__slider-btn-active");
  });
  dots[dotIndex].classList.add("tips__slider-btn-active");
});

btnPrev.addEventListener("click", () => {
  if (offset == 0) {
    offset = +width.slice(0, width.length - 2) * (tipsBoxLists.length - 1);
  } else {
    offset -= +width.slice(0, width.length - 2);
  }

  tipsImgs.style.transform = `TranslateX(-${offset}px)`;

  if (dotIndex == 0) {
    dotIndex = dots.length - 1;
  } else {
    dotIndex -= 1;
  }

  dots.forEach((item) => {
    item.classList.remove("tips__slider-btn-active");
  });
  dots[dotIndex].classList.add("tips__slider-btn-active");
});

dots.forEach((item) => {
  item.addEventListener("click", (event) => {
    const datasetId = +event.currentTarget.dataset.id;
    dotIndex = datasetId;

    offset = +width.slice(0, width.length - 2) * datasetId;

    tipsImgs.style.transform = `TranslateX(-${offset}px)`;

    dots.forEach((item) => {
      item.classList.remove("tips__slider-btn-active");
    });
    dots[dotIndex].classList.add("tips__slider-btn-active");
  });
});
