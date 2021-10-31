window.addEventListener('load', function () {
    const windowSlaider = this.document.querySelector('.windowSlaider');
    const treck = this.document.querySelector('.treck');
    const itemSlaider = this.document.querySelectorAll('.itemSlaider');
    const btnPrew = this.document.querySelector('.btnPrew');
    const btnNext = this.document.querySelector('.btnNext');

    const allItemSlaider = itemSlaider.length;
    const showSlider = 3;
    const scroleSlider = 2;
    const widthItemSlide = windowSlaider.clientWidth / showSlider;
    const moveSlider = scroleSlider * widthItemSlide;
    var lengthMoveSlide = 0;

    itemSlaider.forEach((item) => {
        item.style.minWidth = `${widthItemSlide}px`
    })

    const funMovementsItems = () => {
        treck.style.transform = `translateX(${lengthMoveSlide}px)`;
    }

    const checkBtn = () => {
        btnNext.disabled = (lengthMoveSlide === 0);
        btnPrew.disabled = lengthMoveSlide === -((allItemSlaider - showSlider) * widthItemSlide);

    }




    btnPrew.addEventListener('click', () => {
        const move = allItemSlaider - (Math.abs(lengthMoveSlide) + showSlider * widthItemSlide) / widthItemSlide;
        lengthMoveSlide -= move * widthItemSlide >= (scroleSlider * widthItemSlide) ? (scroleSlider * widthItemSlide) : move * widthItemSlide;
        funMovementsItems();
        checkBtn();
        console.log('btnPrew');
        console.log(lengthMoveSlide);
    })

    btnNext.addEventListener('click', () => {
        const move = Math.abs(lengthMoveSlide) / widthItemSlide;
        lengthMoveSlide += move * widthItemSlide >= (scroleSlider * widthItemSlide) ? (scroleSlider * widthItemSlide) : move * widthItemSlide;
        funMovementsItems();
        checkBtn();
        console.log('btnNext');
        console.log(lengthMoveSlide);
    })




    checkBtn();
    console.log(allItemSlaider);
    console.log(widthItemSlide);
    console.log(windowSlaider.clientWidth);
    console.log(moveSlider);

})
