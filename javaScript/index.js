let aside = document.querySelector('.aside').querySelectorAll('li'),
    a_len = aside.length,
    asideBox = document.querySelector('.asideBox').querySelectorAll('.asideItem'),
    m_len = asideBox.length,
    swiper_wrapper = document.querySelector('.swiper-wrapper')
for (let i = 0; i < a_len; i++) {
    aside[i].addEventListener('mouseover', function () {
        aside[i].setAttribute('index', i);
        let index = this.getAttribute('index');
        for (let j = 0; j < m_len; j++) {
            asideBox[j].style.display = "none";
        }
        asideBox[index].style.display = "block";
        swiper_wrapper.style.display = "none";
    })
    aside[i].addEventListener('mouseout', function () {
        for (let j = 0; j < m_len; j++) {
            asideBox[j].style.display = "none";
        }
        swiper_wrapper.style.display = "block";
    })
}