
let htmlString = '';

audioList.forEach((param) => {
  htmlString += `
    <div class="music-container js-music-container" onclick="
    document.querySelector('.js-head-container').innerHTML = \`
        <div>
          <p>Title: ${param.title}</p>
          <audio class='${param.title}' controls src='${param.audioSource}' type='${param.format}'></audio>
        </div>
      \`;
      
    ">
      <p>Title: ${param.title}</p>
      <audio class="${param.title}" controls src="${param.audioSource}" type="${param.format}"></audio>
    </div>
  `;
});

document.querySelector('.js-grid-container').innerHTML = htmlString;
