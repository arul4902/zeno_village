import fs from 'node:fs/promises';
import sharp from 'sharp';
const manifest=JSON.parse(await fs.readFile('public/assets/manifest.json','utf8'));
const a={'about/bridge':'https://d2gx18f76jq9dw.cloudfront.net/81633/900-kandi-glass-bridge-park-yks5i9tu.jpg','about/falls':'https://d2gx18f76jq9dw.cloudfront.net/81634/soochipara-falls-l4f50dmx.jpg','about/chembra':'https://d2gx18f76jq9dw.cloudfront.net/81631/chembra-peak-z6xi9vlo.jpg'};
for(const [name,url] of Object.entries(a)){const r=await fetch(url);if(!r.ok)throw Error(`${name} ${r.status}`);await fs.mkdir('public/assets/about',{recursive:true});await sharp(Buffer.from(await r.arrayBuffer())).resize({width:900,withoutEnlargement:true}).webp({quality:82}).toFile(`public/assets/${name}.webp`);manifest.assets[name]=url;console.log(name);}
for(const [name,page] of [['jeep','off-road-jeep-drive'],['dining','resturant-6']]){const html=await (await fetch('https://www.zenovillage.com/'+page)).text();await fs.writeFile(`work-${name}.html`,html);const urls=[...new Set(html.match(/https:\/\/d2gx18f76jq9dw.cloudfront.net\/[^"\s<>]+\.(?:jpg|webp|png)/g)||[])];console.log(name,urls.slice(0,8));}
manifest.formats='WebP derivatives resized to a maximum of 1800 × 1600; original photographs retained locally.';
await fs.writeFile('public/assets/manifest.json',JSON.stringify(manifest,null,2));
