import fs from 'node:fs/promises';import sharp from 'sharp';
const a={jeep:'https://d2gx18f76jq9dw.cloudfront.net/18553/01JVKR4NYHH3F06GZH2Q8VHY6V.jpg',dining:'https://d2gx18f76jq9dw.cloudfront.net/18524/01JVKQH8E1GCAR0BBFTQ9WQEK8.jpg'};
const manifest=JSON.parse(await fs.readFile('public/assets/manifest.json','utf8'));
await fs.mkdir('public/assets/experiences',{recursive:true});
for(const [n,u] of Object.entries(a)){const r=await fetch(u);if(!r.ok)throw Error(r.status);await sharp(Buffer.from(await r.arrayBuffer())).resize({width:1400,withoutEnlargement:true}).webp({quality:83}).toFile('public/assets/experiences/'+n+'.webp');manifest.assets['experiences/'+n]=u;}
await fs.writeFile('public/assets/manifest.json',JSON.stringify(manifest,null,2));
