//Downloading and processing the picture sequentially.
function download(url, callback) {
  setTimeout(() => {
      // script to download the picture here
      console.log(`Downloading ${url} ...`);
      // process the picture once it is completed
      callback(url);
  }, 3000);
}

const url1 = 'https://www.javascripttutorial.net/pic1.jpg';
const url2 = 'https://www.javascripttutorial.net/pic2.jpg';
const url3 = 'https://www.javascripttutorial.net/pic3.jpg';

download(url1,function(picture){
  console.log(`Processing ${picture}`);
  // download the second picture
  download(url2,function(picture){
      console.log(`Processing ${picture}`);
      // download the third picture
      download(url3,function(picture){
          console.log(`Processing ${picture}`);
      });
  });
});