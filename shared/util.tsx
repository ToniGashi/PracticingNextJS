import fs from 'fs';

import path from 'path';

export function getPostList() {
    try{
        const postDir=path.join(process.cwd(), 'pages/post');

        return fs.readdirSync(postDir).map(fileName => (
            fileName.substring(0,fileName.indexOf('.'))
        ))
    } catch{
        console.warn('There are no posts!!');
        return [];
    }
}