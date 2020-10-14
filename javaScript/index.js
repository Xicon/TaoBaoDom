let
    aside = document.querySelector('.aside').querySelectorAll('li'),
    aside_len = aside.length,
    asideBox = document.querySelector('.asideBox').querySelectorAll('.asideItem'),
    asideItem_len = asideBox.length,
    swiper_wrapper = document.querySelector('.swiper-wrapper')


for (let i = 0; i < aside_len; i++) {
    aside[i].addEventListener('mouseover', function () {
        aside[i].setAttribute('index', i);
        let index = this.getAttribute('index');
        for (let j = 0; j < asideItem_len; j++) {
            asideBox[j].style.display = "none";
        }
        asideBox[index].style.display = "block";
        swiper_wrapper.style.display = "none";
    })
    aside[i].addEventListener('mouseout', function () {
        for (let j = 0; j < asideItem_len; j++) {
            asideBox[j].style.display = "none";
        }
        swiper_wrapper.style.display = "block";
    })
}
let m_Item = document.querySelector('.maninContentRightItemBox').querySelectorAll('li'),
    m_Item_len = m_Item.length,
    m_list = document.querySelector('.maninContentRightItemBannerBox').querySelectorAll('li'),
    m_list_len = m_list.length;

for (let i = 0; i < m_Item_len; i++) {
    m_Item[i].addEventListener('mouseover', function () {
        for (let i = 0; i < m_Item_len; i++) {
            m_Item[i].className = ""
        }
        this.className = "maninContentRightItemDom";
        m_Item[i].setAttribute('index', i)
        let index = this.getAttribute('index')
        for (let j = 0; j < m_list_len; j++) {
            m_list[j].style.display = "none";
        }
        m_list[index].style.display = "block";
    })
}