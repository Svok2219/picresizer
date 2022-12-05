let result = document.querySelector('.result'),
img_result = document.querySelector('.img-result'),
img_w = document.querySelector('.img-w'),
img_h = document.querySelector('.img-h'),
resultbox = document.querySelector('.resultbox'),
options = document.querySelector('.options'),
save = document.querySelector('.save'),
cropped = document.querySelector('.cropped'),

upload = document.querySelector('#file-input'),
openCrop=document.querySelector('.custom-file-upload'),
uploadit=document.querySelector('.uploadit'),
imgSection=document.querySelector('#imgSection'),

original=document.querySelector("#original"),
heart = document.querySelector("#heart"),
circle=document.querySelector("#circle"),
rectangle=document.querySelector("#rectangle"),
square=document.querySelector("#square")

cropper = '';

// on change show image with crop options
upload.addEventListener('change', e => {
  if (e.target.files.length) {
    // start file reader
    const reader = new FileReader();
    reader.onload = e => {
      if (e.target.result) {
        // create new image
        let img = document.createElement('img');
        img.id = 'image';
        img.src = e.target.result;
        // clean result before
        result.innerHTML = '';
        // append new image
        result.appendChild(img);
        // show save btn and options
        save.classList.remove('hide');
        options.classList.remove('hide');
        // init cropper
        cropper = new Cropper(img);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});

// save on click
save.addEventListener('click', e => {
  e.preventDefault();
  // get result to data uri
  let imgSrc = cropper.getCroppedCanvas({
    width: img_w.value // input value
  }).toDataURL();
  // resultbox.classList.add('d-none')
  // remove hide class of img
  cropped.classList.remove('hide');
  img_result.classList.remove('hide');
  // show image cropped
  cropped.src = imgSrc;
  dwn.classList.remove('hide');

  dwn.setAttribute('href', imgSrc);
  // save.classList.add("d-none")
});
// openCrop.addEventListener('click', e => {
//   e.preventDefault();
//   resultbox.classList.remove('d-none')
//   save.classList.remove("d-none")
// })


original.addEventListener('click', e => {
  cropped.classList.remove('circleShape','rectangularShape','squareShape',"heartShape") 
})

circle.addEventListener('click', e => {
  // e.preventDefault();
  cropped.classList.remove("rectangularShape","heartShape","squareShape")
  cropped.classList.add("circleShape")
})
rectangle.addEventListener('click', e => {
  // e.preventDefault();
  cropped.classList.remove("circleShape","squareShape","heartShape")
  cropped.classList.add("rectangularShape")
})
square.addEventListener('click', e => {
  cropped.classList.remove("circleShape","rectangularShape","heartShape")
  cropped.classList.add("squareShape")
})
heart.addEventListener("click", e =>{
  cropped.classList.remove("circleShape","rectangularShape","squareShape")
  cropped.classList.add("heartShape")
})

//Upload button
uploadit.addEventListener("click", e =>{
imgSection.src=cropped.src
imgSection.classList=cropped.classList
imgSection.classList.add("measurement")
})
