import fs from 'node:fs/promises';import sharp from 'sharp';
const a={'night/campfire':'20213/01JWE1F2NEPNPR2PYQ03ZYFSPN','experiences/trekking':'20212/01JWE1E6BEH7Z85MZWK52DSQ1B'};
const m=JSON.parse(await fs.readFile('public/assets/manifest.json','utf8'));
for(const [n,key] of Object.entries(a)){const u='https://d2gx18f76jq9dw.cloudfront.net/'+key+'.jpg';const r=await fetch(u);if(!r.ok)throw Error(r.status);await sharp(Buffer.from(await r.arrayBuffer())).resize({width:1600,withoutEnlargement:true}).webp({quality:83}).toFile('public/assets/'+n+'.webp');m.assets[n]=u;}
await fs.writeFile('public/assets/manifest.json',JSON.stringify(m,null,2));
