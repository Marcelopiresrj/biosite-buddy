const fs = require('fs');

async function download() {
  const headers = { 'User-Agent': 'Mozilla/5.0' };
  
  console.log("Baixando PS5...");
  const ps5Res = await fetch("https://upload.wikimedia.org/wikipedia/commons/1/1b/PlayStation_5_and_DualSense_with_disc.jpg", { headers });
  const ps5Buffer = await ps5Res.arrayBuffer();
  fs.writeFileSync('public/ps5.jpg', Buffer.from(ps5Buffer));

  console.log("Baixando Xbox Series S...");
  const xboxSRes = await fetch("https://upload.wikimedia.org/wikipedia/commons/b/b5/Xbox_Series_S_console.jpg", { headers });
  const xboxSBuffer = await xboxSRes.arrayBuffer();
  fs.writeFileSync('public/xbox-s.jpg', Buffer.from(xboxSBuffer));
  
  console.log("Baixando Xbox Series X...");
  const xboxXRes = await fetch("https://upload.wikimedia.org/wikipedia/commons/e/e4/Xbox_Series_X_Black.jpg", { headers });
  const xboxXBuffer = await xboxXRes.arrayBuffer();
  fs.writeFileSync('public/xbox-x.jpg', Buffer.from(xboxXBuffer));

  console.log("Imagens concluídas!");
}

download().catch(console.error);
