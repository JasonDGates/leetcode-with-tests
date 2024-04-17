const groupAnagrams = function(arrayOfStrings) {
    const hashString = function(string) {
        const characterCount = Array(26).fill(0);
        for (const character of string) {
            characterCount[character.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        const result = [];
        for (let i = 0; i < 26; i++) {
            if (characterCount[i] !== 0) {
                result.push(String.fromCharCode(i + 'a'.charCodeAt(0)), characterCount[i].toString());
            }
        }

        return result.join('');
    };

    const result = [];
    const groupsOfAnagrams = new Map();

    for (const string of arrayOfStrings) {
        const hashedString = hashString(string);
        if (!groupsOfAnagrams.has(hashedString)) {
            groupsOfAnagrams.set(hashedString, [])
        }
        groupsOfAnagrams.get(hashedString).push(string)
    }

    groupsOfAnagrams.forEach(group => result.push(group))

    return result;
};
