class WordDistance {

    constructor(wordsDict) {
        this.dict = new Map();

        for (let i = 0; i < wordsDict.length; i++) {
            this.dict.set(wordsDict[i], i);
        }
    }

    shortest(word1, word2) {
        return Math.abs(this.dict.get(word1) - this.dict.get(word2));
    }
}
