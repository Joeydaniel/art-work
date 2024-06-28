async function display() {
    const imageLink = {
        image1: '/pages/img/art12.jpg',
        image2: '/pages/img/art10.jpg',
        image3: '/pages/img/art20.jpg',
        image4: '/pages/img/art21.jpg'

    };

    const img1 = document.getElementById('image1');
    img1.src = imageLink.image1;

    const img2 = document.getElementById('image2');
    img2.src = imageLink.image2;


    const img3 = document.getElementById('image3');
    img3.src = imageLink.image3;

    const img4 = document.getElementById('image4');
    img4.src = imageLink.image4;
}

display();







// Define the image URLs
// const imageUrls = [
//     '/pages/img/art3.jpg',
//     '/pages/img/art30.jpg',
//     '/pages/img/art12.jpg',
//     '/pages/img/art10.jpg'
// ];

// // Function to display images
// function displayImg() {
//     const container = document.getElementById('container');
    
//     // Clear existing images
//     container.innerHTML = '';

//     // Create and append img elements for each image URL
//     imageUrls.forEach(url => {
//         const img = document.createElement('img');
//         img.src = url;
//         img.alt = 'Artwork'; // Example alt text, adjust as needed
//         container.appendChild(img);
//     });
// }

// // Add click event listener to the button
// const displayImages = document.getElementById('displayButton');
// displayImages.addEventListener('click', displayImg);
