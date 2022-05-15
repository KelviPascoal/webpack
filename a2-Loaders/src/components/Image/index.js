export class Image {
    create(image) {
        const img = document.createElement('img');

        img.src = image;
        // img.width = 400
        img.height = 200


        document.querySelector('body').appendChild(img)
    }
}