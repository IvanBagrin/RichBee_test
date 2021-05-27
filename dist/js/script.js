$(document).ready(function(){

  $('div.description__title').on('click', 'div:not(.description__title-active)', function() {
    $(this)
      .addClass('description__title-active').siblings().removeClass('description__title-active')
      .closest('div.container').find('div.description__tabs').removeClass('description__tabs-active').eq($(this).index()).addClass('description__tabs-active');
  });

  $('[data-modal=auth]').on('click', function() {
    $('.overlay, #auth').fadeIn('slow');
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #auth').fadeOut('slow');
  })



  $('div.product__gallery').on('click', 'div:not(.product__gallery_active)', function() {
    $(this)
      .addClass('product__gallery_active').siblings().removeClass('product__gallery_active')
      
  });

});

//info img+text
addEventListener('mouseover', function(e) {

  if(e.target.className == 'product__data-priceInfo') {
    e.target.previousElementSibling.hidden=false;
  } else {
    
  for (let key of document.querySelectorAll('#i-have-a-tooltip')) {
    key.hidden=true;
  }

  for (let key of document.querySelectorAll('#i-have-a-analogue')) {
    key.hidden=true;
  }
  }
  
})




//смена фото
addEventListener('click', function(e) {
  let test = document.querySelector('.product__gallery_active');

  if(test.id == 'product__gallery_up' || test.id == 'product__gallery_down') {
    test.style.border = 'none';
    return
  } ;


  let img = document.querySelector('.product__img_item');
  img.src = test.lastChild.getAttribute('src');

})




//--------------------

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});


menu.addEventListener('click', (e) => {
    target = e.target;
        if (target.tagName == "A") {
            menu.classList.toggle('active');
        }
    
})

//создаем скидочный знак
let sale = document.querySelectorAll('.analogue__item-sale');
for (let key of sale) {
  let div = document.createElement('div');
  div.className = "sale";
  div.innerHTML = "%"
  key.prepend(div);
}

addEventListener('mouseover', function (e) {
  if(e.target.className == 'sale') {
    e.target.style.width='100px'
   e.target.innerHTML = '% Скидка';
  }
})

addEventListener('mouseout', function (e) {
  if(e.target.className == 'sale') {
    e.target.style.width='26px'
   e.target.innerHTML = '%';
  }
})


