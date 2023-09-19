import { audioList } from './musicList.js';

let htmlString = '';

audioList.forEach((audioObject) => {
  let titleWithoutSpace = audioObject.title;

  if(titleWithoutSpace.includes(" ")){
    console.log(`Vorher - Includes Test: ${titleWithoutSpace}`);
    titleWithoutSpace = titleWithoutSpace.replace(/ /g, '-');
    console.log(`Nachher - Includes Test: ${titleWithoutSpace}`);
  }

  if(!audioObject.versions){
    htmlString += `
    <div class="flexbox0 p-style">
            <div class="flexbox1-head">
              <div class="image-container">
                <img class="dad-img" src="${audioObject.imageSource}">
              </div>
              <p class="css-title-${titleWithoutSpace}">${audioObject.title}</p>
            </div>
            <div class="flexbox1-body">
              <audio class="controler" controls src="${audioObject.audioSource}" type="audio/${audioObject.audioType}"></audio>
              <div class="flexbox1-body-grid">
                <p class="description">Artist</p>
                <p>${audioObject.artist}</p>
                <p class="description">Genre</p>
                <p>${audioObject.genre}</p>
              </div>
            </div>
          </div>
    `
  }
  else{
    htmlString += `
    <div class="flexbox0 p-style">
            <div class="flexbox1-head">
              <div class="image-container">
                <img class="dad-img" src="${audioObject.imageSource}">
              </div>
              <p class="css-title-${titleWithoutSpace}">${audioObject.title}</p>
            </div>
            <div class="flexbox1-body">
              <audio class="controler" controls src="${audioObject.audioSource}" type="audio/${audioObject.audioType}"></audio>
              <div class="flexbox1-body-grid">
                <p class="description">Artist</p>
                <p>${audioObject.artist}</p>
                <p class="description">Genre</p>
                <p>${audioObject.genre}</p>
              </div>
            </div>
            <div class="drop-down-hover-2">
            </div>
          </div>
    `
  }
});

document.querySelector('.main-body-part-grid').innerHTML = htmlString;