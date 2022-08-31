function lengthOfLastWord(s) {
    const regexp = /(\W+)/g;
    const lastWord = s.trim().replace(regexp, '-').split('-').pop();

    return lastWord.length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
