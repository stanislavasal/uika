window.addEventListener('resize', updateHeader);

function updateHeader() {
  var mobileHeaderExists = document.querySelector('.mobile-header');
  var isMobile = window.innerWidth <= 743;

  if (isMobile) {
    if (!mobileHeaderExists) {
      createMobileHeader();
    }
  } else {
    if (mobileHeaderExists) {
      mobileHeaderExists.remove();
    }
  }
}

function createMobileHeader() {
  var mobileHeader = document.createElement('div');
  mobileHeader.classList.add('mobile-header');
  mobileHeader.style.display = 'flex';
  mobileHeader.style.justifyContent = 'space-between';
  mobileHeader.style.width = '100vw';
  mobileHeader.style.height = '21.6vw';
  mobileHeader.style.position = 'fixed';
  mobileHeader.style.zIndex = '1000';
  mobileHeader.style.padding = '3.81vw';
  mobileHeader.style.alignItems = 'center';
  mobileHeader.style.backgroundColor = 'transparent';
  var leftImage = document.createElement('img');
  leftImage.src = 'right-image-url';
  leftImage.classList.add('left-image');
  leftImage.style.width = '29.2vw';
  leftImage.style.height = '20vw';
  var rightImage = document.createElement('img');
  rightImage.src = 'right-image-url';
  rightImage.classList.add('right-image');
  rightImage.style.width = '21.6vw';
  rightImage.style.height = '21.6vw';
  mobileHeader.appendChild(leftImage);
  mobileHeader.appendChild(rightImage);
  document.body.appendChild(mobileHeader);
}

updateHeader();