function idGenerator() {
    let idArray = ['1','2','3','4','5','6','7','8','9',]
    let idOutput = ''

    for (let i = 0; i < 10; i++) {
        idOutput += idArray[Math.floor(Math.random() * 8)]
        }
        return idOutput;
}
module.exports = { idGenerator };