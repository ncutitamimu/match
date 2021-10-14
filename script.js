const images = [
    {
      image_name: 'bananas.jpg',
      number_of_items: 6,
    },
    {
      image_name: 'birthday candles.jpg',
      number_of_items: 7,
    },
    {
      image_name: 'blocks.jpg',
      number_of_items: 6,
    },
    {
      image_name: 'brushes.jpg',
      number_of_items: 7,
    },
    {
      image_name: 'cakes.jpg',
      number_of_items: 7,
    },
    {
      image_name: 'cars.jpg',
      number_of_items: 2,
    },
    {
      image_name: 'crayons.jpg',
      number_of_items: 8,
    },
    {
      image_name: 'cupcakes.jpg',
      number_of_items: 7,
    },
    {
      image_name: 'deer.jpg',
      number_of_items: 3,
    },
    {
      image_name: 'donuts.jpg',
      number_of_items: 6,
    },
    {
      image_name: 'ducks.jpg',
      number_of_items: 6,
    },
    {
      image_name: 'eggs.jpg',
      number_of_items: 8,
    },
    {
      image_name: 'elephants.jpg',
      number_of_items: 7,
    },
    {
      image_name: 'hot air balloons.jpg',
      number_of_items: 5,
    },
    {
      image_name: 'jelly beans.jpg',
      number_of_items: 9,
    },
    {
      image_name: 'macaroons.jpg',
      number_of_items: 7,
    },
    {
      image_name: 'pencils.jpg',
      number_of_items: 12,
    },
    {
      image_name: 'people.jpg',
      number_of_items: 6,
    },
    {
      image_name: 'peppers.jpg',
      number_of_items: 2,
    },
    {
      image_name: 'pizza slices.jpg',
      number_of_items: 8,
    },
  ];
  let currentImageValue = 0,
  displayNumber = 0,
  score = 0
  const setImagesrc = (randomImageName) =>{
    const imageContainer = document.getElementById("imageContainer");
    if(imageContainer.hasChildNodes()) {
      imageContainer.removeChild(imageContainer.firstElementChild);
    }
    const image = document.createElement("img");
    image.src = `images/${randomImageName}`;
    imageContainer.appendChild(image); 
  };
  generateDisplayNumber = (numberofitems,plusOrMinus) => {
    const split = Math.floor(Math.random() * 2)
    if(split === 0){
      document.getElementById("number").innerHTML = numberofitems;
      displayNumber = numberofitems;
    }else{
      document.getElementById("number").innerHTML = `${
        numberofitems + plusOrMinus
      }`; 
      displayNumber = numberofitems + plusOrMinus; 
    }
    currentImageValue = numberofitems;
  };
  const generatePlusOrMinus =() => {
    const number0to1 = Math.floor(Math.random() * 2);
    return number0to1 === 0 ? -1 : +1;
  };
  const setImageName = (randomImageName) => {
  const imageName = randomImageName.slice(0, randomImageName.length -  4);
  document.getElementById("item-name").innerHTML = imageName + "?";
  };
const generate = () => {
  console.log(currentImageValue, displayNumber);
  if(images.length === 0){
    stopTimer();
    return;
  }
  const randomNumber = Math.floor(Math.random() * images.length);
  const randomImageName = images[randomNumber].image_name;
  setImagesrc(randomImageName);
  setImageName(randomImageName);
  const plusOrMinus = generatePlusOrMinus();
  const numberofitems = images[randomNumber].number_of_items;
  generateDisplayNumber(numberofitems, plusOrMinus);
  images.splice(randomNumber, 1);
};
const match = () =>{
  currentImageValue === displayNumber ? score++ : score--;
  document.getElementById("currentScore").innerHTML = score;
};
const noMatch = () =>{
  currentImageValue === displayNumber ? score++ : score--;
  document.getElementById("currentScore").innerHTML = score;
};
const timer = () => {
    timerRef = setInterval(generate, 5000);
};
const play = () => {
  
  generate();
  timer();
};
const stopTimer = () => {
  clearInterval(timerRef);
};