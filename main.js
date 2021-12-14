const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const slider = document.querySelector(".slider__img");
const sliderText = document.querySelector(".slider__text");

const sliderImg = {
  currentIndex: 0,
  bgImgs: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1570745096688-2f8f2368d1e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=917&q=80https://www.jetsetter.com//uploads/sites/7/2018/04/7Np69-pW-1380x690.jpeghttps://images.unsplash.com/photo-1570745096688-2f8f2368d1e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=917&q=80",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1505932361786-f14e9ce89a0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=892&q=80",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1491466424936-e304919aada7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1596016691838-70260f1e21c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    },
  ],
  defineProperties: function () {
    Object.defineProperty(this, "currentImg", {
      get: function () {
        return this.bgImgs[this.currentIndex];
      },
    });
  },
  handleEvents: function () {
    const _this = this;
    nextBtn.onclick = function () {
      _this.nextSlide();
    };

    prevBtn.onclick = function () {
      _this.prevSlide();
    };

    setInterval(() => {
      _this.nextSlide();
    }, 8000);
  },
  loadCurrentSlide: function () {
    slider.style.backgroundImage = `url(${this.currentImg.img})`;
    sliderText.animate(
      [
        { opacity: 0, transform: "translateY(10%)" },
        { opacity: 1, transform: "translateY(-10%)" },
      ],
      { duration: 2000, easing: "ease-in", fill: "forwards" }
    );
  },
  nextSlide: function () {
    this.currentIndex++;

    if (this.currentIndex >= this.bgImgs.length) {
      this.currentIndex = 0;
    }

    this.loadCurrentSlide();
  },
  prevSlide: function () {
    this.currentIndex--;

    if (this.currentIndex < 0) {
      this.currentIndex = this.bgImgs.length - 1;
    }

    this.loadCurrentSlide();
  },
  start: function () {
    this.defineProperties();
    this.handleEvents();
    this.loadCurrentSlide();
  },
};

sliderImg.start();

$(".home-tour-list").slick({
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".home-review-list").slick({
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".home-team-list").slick({
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// $('.home-experience__quantity').counterUp({ delay: 10, time: 1000})
