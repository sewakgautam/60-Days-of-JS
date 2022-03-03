// template strings

const title = 'mario';
const author = 'sewak';
const like = '30';

// concatenation way
// eslint-disable-next-line max-len
// let result = 'this blog name is ' + title + ' its author is ' + author + 'and this blog has ' + like; // old way

// template way
// let result = `this blog called ${title} by ${author} has ${like} like`
// console.log(result)

// html template string

const htmls = `
    <h2>${title}</h2>,<br>
    <p>by ${author}</p>
    <p>has ${like} Likes</p>
`;
console.log(htmls);
