function checkCharacter(string) {
    let word = prompt('Enter the word :..');
    if (word == word.toUpperCase()) {
        console.log('All character are capital.');
    }
    else if (word == word.toLowerCase()) {
        console.log('All character are small.');
    } else {
        console.log('All character are mix.');
    }


}