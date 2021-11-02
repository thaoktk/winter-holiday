
const prevBtn = document.querySelector('.btn-prev')
const nextBtn = document.querySelector('.btn-next')
const slider = document.querySelector('.slider__img')
const sliderText = document.querySelector('.slider__text')

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
        sliderText.animate([{ opacity: 0, transform: 'translateY(10%)' }, { opacity: 1, transform: 'translateY(-10%)' }], {duration: 2000, easing: "ease-in", fill: 'forwards'} )
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

$('.home-tour-list').slick({
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
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 740,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.home-review-list').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite:true, 
    dots: true,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 740,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
})

$('.home-team-list').slick({
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 740,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
})

$('.home-experience__quantity').counterUp({ delay: 10, time: 1000})