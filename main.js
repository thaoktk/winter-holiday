const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const prevBtn = $('.btn-prev')
const nextBtn = $('.btn-next')
const slider = $('.slider__img')

const sliderImg = {
    currentIndex: 0,
    bgImgs: [
        {
            id: 1, 
            img: 'https://www.jetsetter.com//uploads/sites/7/2018/04/7Np69-pW-1380x690.jpeg'
        },
        {
            id: 2, 
            img: 'https://res.cloudinary.com/whistler/image/upload/w_500,c_scale,dpr_3.0,q_auto/v1/s3/images/header/skiing-whistler-blackcomb-2.jpg'
        },
        {
            id: 3, 
            img: 'https://www.silverswanrecruitment.com/wp-content/uploads/2018/04/pexels-flo-maderebner-869258-scaled.jpg'
        },
        {
            id: 4, 
            img: 'https://static.euronews.com/articles/stories/05/13/78/44/1440x810_cmsv2_1663514d-f816-50b3-ad92-b4d1195fd4cf-5137844.jpg'
        },
    ],
    defineProperties: function() {
        Object.defineProperty(this, 'currentImg', {
            get: function() {
                return this.bgImgs[this.currentIndex];
            }
        })
    },
    handleEvents: function() {
        const _this = this;
        nextBtn.onclick = function() {
            _this.nextSlide();
        }

        prevBtn.onclick = function() {
            _this.prevSlide();
        }

        setInterval(() => {
            _this.nextSlide();
        }, 8000)
    },
    loadCurrentSlide: function() {
        slider.style.backgroundImage = `url(${this.currentImg.img})`;
    },
    nextSlide: function() {
        this.currentIndex++;

        if (this.currentIndex >= this.bgImgs.length) {
            this.currentIndex = 0;
        }

        this.loadCurrentSlide();
    },
    prevSlide: function() {
        this.currentIndex--;

        if (this.currentIndex < 0) {
            this.currentIndex = this.bgImgs.length - 1;
        }

        this.loadCurrentSlide();
    },
    start: function() {
        this.defineProperties();
        this.handleEvents();
        this.loadCurrentSlide();
    }
}

sliderImg.start();

$(document).ready(function(){
    $('.home-tour-list').slick({
        autoplaySpeed: 3000,
        draggable: true,
    });
  });
