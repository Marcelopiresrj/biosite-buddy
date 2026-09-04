const fs = require('fs');

async function download() {
  const headers = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' };
  
  console.log("Baixando hover.mp3...");
  const hoverRes = await fetch("https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=pop-39222.mp3", { headers });
  const hoverBuffer = await hoverRes.arrayBuffer();
  fs.writeFileSync('public/hover.mp3', Buffer.from(hoverBuffer));

  console.log("Baixando music.mp3...");
  const musicRes = await fetch("https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3", { headers });
  const musicBuffer = await musicRes.arrayBuffer();
  fs.writeFileSync('public/music.mp3', Buffer.from(musicBuffer));
  
  console.log("Concluído!");
}

download().catch(console.error);
