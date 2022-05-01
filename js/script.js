$(document).ready(function () {
    $('.main-gallery').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        autoPlay: true,
    });
});

const win_w = $(window).width();
const wowEffects = document.querySelectorAll('.wow');
const footer = document.querySelector('#footer');
if (win_w <= 440) {
    wowEffects.forEach(wowElement => {
        $(wowElement).removeClass('wow');
        $(wowElement).removeClass('animate__animated');
    });
    footer.innerHTML = '<a href="https://api-museum.kassy.ru/36/" target="_blank" class="order-button footer">Заказать программу</a><article class="contacts" id="Contacts"><p>Контактная информация</p><ul class="social"><li><a href="#"><img src="./img/SocialImg/ImageVK.png" alt=""></a></li><li><a href="#"><img src="./img/SocialImg/ImageTelegram.png" alt=""></a></li><li><a href="#"><img src="./img/SocialImg/ImageSite.png" alt=""></a></li></ul></article><p class="credits">© 2022 Псково-Изборский объединенный музей-заповедник</p>'
}

const phones = document.querySelectorAll('.phone');
phones.forEach(phone => {
    phone.addEventListener('click', function () {
        const el = document.createElement('textarea');
        el.value = phone.textContent;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    })
});
phones.forEach(phone => {
    let text = phone.textContent;
    phone.addEventListener('click', function () {
        if (phone.textContent === text) {
            phone.textContent = `${text} (номер скопирован в буфер обмена)`;
            setTimeout(function () {
                phone.textContent = `${text}`;
            }, 2000);
        }
    })
});

// const mobileMenuButton = document.querySelector('.menu-img');
// if (mobileMenuButton){
//     mobileMenuButton.addEventListener('click', function(){
//         $('.mobile-navigation').css('display','inline-block');
//     })
// }