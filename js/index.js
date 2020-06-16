window.onload = function () {
    //slider
    const sliderItems = document.querySelectorAll('.slider__item');
    const slidersCtrls = document.querySelectorAll('.slider__ctrl');
    const wrapperSliderCtrls = document.querySelector('.slider__ctrls');

    let currentItem = 0;


    function hideItem(){
        sliderItems[currentItem].classList.add('item--to-hide');
        sliderItems[currentItem].addEventListener('animationend', function () {
            this.classList.remove('item--to-hide', 'item--active');
        })
    }

    function showItem(){
        sliderItems[currentItem].classList.add('item--to-show');
        sliderItems[currentItem].addEventListener('animationend', function () {
            this.classList.remove('item--to-show');
            this.classList.add('item--active');
        })
    }

    wrapperSliderCtrls.addEventListener('click', function (e) {
        if(e.target.classList[0] === 'slider__ctrl'){
            const itemCtrl = e.target.classList[1];

            slidersCtrls.forEach(function (ctrl) {
                ctrl.classList.remove('slider__ctrl--active');
                e.target.classList.add('slider__ctrl--active');
            });

            hideItem();

            if(itemCtrl === 'slider__ctrl--1') currentItem = 0;
            if(itemCtrl === 'slider__ctrl--2') currentItem = 1;
            if(itemCtrl === 'slider__ctrl--3') currentItem = 2;

            showItem();
        }
    });

    //modal-window
    const modalWindow = document.querySelector('.modal-window');

    document.querySelector('.form__btn').addEventListener('click', function (e) {
        e.preventDefault();
        let inputValue = document.querySelector('.form__inp').value;
        if(inputValue){
            modalWindow.classList.add('modal-window--active');
            document.querySelector('.form__inp').value = '';
        }

    });

    modalWindow.addEventListener('click', function (event) {
        if(event.target.classList[0] === 'modal-window') modalWindow.classList.remove('modal-window--active');
    })

};