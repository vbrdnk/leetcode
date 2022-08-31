const RULE_INDEX = {
    'type': 0,
    'color': 1,
    'name': 2
};

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = function(items, ruleKey, ruleValue) {
    return items.filter(item => {
        return item[RULE_INDEX[ruleKey]] === ruleValue;
    }).length;
};
