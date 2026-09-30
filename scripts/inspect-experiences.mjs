import fs from 'node:fs/promises';
for(const page of ['bonfire-26','trekking-6']){const html=await(await fetch('https://www.zenovillage.com/'+page)).text();console.log(page,[...new Set(html.match(/https:\/\/d2gx18f76jq9dw.cloudfront.net\/[^"\s<>]+\.(?:jpg|webp|png)/g)||[])]);}
