/**
 * @param {string} path
 * @return {string}
 */
 const simplifyPath = function(path) {
    const stack = [];

    let pathArr = path.split('/').filter(el => el !== '.').filter(el => el !== '');

    for (let name of pathArr) {
        if (name === '..') {
            stack.pop();
        } else {
            stack.push(name);
        }
    }

    return `/${stack.join('/')}`;
};