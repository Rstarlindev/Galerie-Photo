

function preloadPhoto() {

if (document.images) {
    img1 = new Image();
    img2 = new Image();
    img3 = new Image();
    img1 = new Image();
    img2 = new Image();
    img3 = new Image();
    img1 = new Image();
    img2 = new Image();

    img1.src = "image/image1.jpg" ;
    img1.src = "image/image2.jpg" ;
    img1.src = "image/image3.jpg" ;
    img1.src = "image/image4.jpg" ;
    img1.src = "image/image5.jpg" ;
    img1.src = "image/image6.jpg" ;
    img1.src = "image/image7.jpg" ;
    img1.src = "image/image8.jpg" ;
}

}

function addPhoto() {

    preloadPhoto();

    var photo =  document.getElementsByName('pic');

    photo.onload = function () {

        console.log("image chargée")
    }

    photo.onerror = image.onabort = function () {
        console.log("erreur pendant le chargement de l'image ");

    }
}
