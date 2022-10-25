const frameImg = document.querySelector('.voice-control__frame-img');
const hole = document.querySelector('.voice-control__hole');

function setHoleClosed() {
  hole.classList.remove('voice-control__hole_type_opened');
};

function setFrameFlying() {
  frameImg.classList.add('voice-control__frame-img_type_flying');
};


function hendlerScrollEvent() {
  let lastScroll = window.pageYOffset + document.documentElement.clientHeight;
  let distanceFromFrameImgBottom = frameImg.getBoundingClientRect().bottom + window.pageYOffset;

  if (lastScroll >= distanceFromFrameImgBottom) {
    frameImg.classList.remove('voice-control__frame-img_type_hide');
    setTimeout(setHoleClosed, 2500);
    setTimeout(setFrameFlying, 3000);
  }
};

document.addEventListener('scroll', hendlerScrollEvent);