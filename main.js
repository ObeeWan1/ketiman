import { audioList } from './musicList.js';

let htmlString = '';

audioList.forEach((audioObject) => {
  let titleWithoutSpace = audioObject.title;

  if (titleWithoutSpace.includes(" ")) {
    titleWithoutSpace = titleWithoutSpace.replace(/ /g, '-');
  }

  const headerColor = 'header-color-' + titleWithoutSpace;

  if (!audioObject.versions) {

    htmlString += `
    <div class="flexbox0 p-style" onclick="
    document.querySelector('.js-header').innerHTML = \`
        <div class='css-header-container'>
          <div class='header-img-container'>
            <img class='header-img ${headerColor}' src='${audioObject.imageSource}'>
          </div>
          <div class='header-info-container'>
            <div>
              <p class='header-title ${headerColor}'>${audioObject.title}</p>
            </div>
            <div>
              <p class='header-artist'>${audioObject.artist}</p>
            </div>
          </div>
          <div class='header-audio-container'>
            <audio class='${audioObject.title}' controls src='${audioObject.audioSource}' type='${audioObject.format}'></audio>
          </div>
        </div>
      \`;
      document.querySelector('audio').play();
    ">
      <div class="content-container">
        <div class="image-container">
          <img class="dad-img" src="${audioObject.imageSource}">
        </div>
        <p class="css-title-${titleWithoutSpace}">${audioObject.title}</p>
      </div>
      <div class="flexbox1-body">
        <audio class="controler" src="${audioObject.audioSource}" type="audio/${audioObject.audioType}"></audio>
        <div class="flexbox1-body-grid">
          <p class="description">Artist</p>
          <p class="description-content">${audioObject.artist}</p>
          <p class="description">Genre</p>
          <p class="description-content">${audioObject.genre}</p>
        </div>
      </div>
      <div class="drop-down-hover-2">
      </div>
    </div>
    `
  }
  else {
    htmlString += `
    <div class="flexbox0 p-style" onclick="
    document.querySelector('.js-header').innerHTML = \`
          <div class='css-header-container'>
            <div class='header-img-container'>
              <img class='header-img ${headerColor}' src='${audioObject.imageSource}'>
            </div>
            <div class='header-info-container'>
              <div>
                <p class='header-title ${headerColor}'>${audioObject.title}</p>
              </div>
              <div>
                <p class='header-artist'>${audioObject.artist}</p>
              </div>
            </div>
            <div class='header-audio-container'>
              <audio class='${audioObject.title}' controls src='${audioObject.audioSource}' type='${audioObject.format}'></audio>
            </div>
        </div>
      \`;
      document.querySelector('audio').play();
    ">
      <div class="content-container">
        <div class="image-container">
          <img class="dad-img" src="${audioObject.imageSource}">
        </div>
        <p class="css-title-${titleWithoutSpace}">${audioObject.title}</p>
      </div>
      <div class="flexbox1-body">
        <audio class="controler" src="${audioObject.audioSource}" type="audio/${audioObject.audioType}"></audio>
        <div class="flexbox1-body-grid">
          <p class="description">Artist</p>
          <p class="description-content">${audioObject.artist}</p>
          <p class="description">Genre</p>
          <p class="description-content">${audioObject.genre}</p>
        </div>
      </div>
      <div class="drop-down-hover-2">
      </div>
    </div>
    `
  }
});

document.querySelector('.main-body-part-grid').innerHTML = htmlString;