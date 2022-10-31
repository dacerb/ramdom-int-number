

const funnyIntNumber = () => {
    const number = Math.floor(Math.random() * 999999999999999);
    console.log(`\x1b[34m${number}\x1b[89m`);
    return number
}

module.exports = {
    funnyIntNumber
};