function main(input) {
    let text = input.toString()
    let length = text.length
    let symbol = 0
    let deciCode = 0
    let result = ""
    // let x = 0
    for (let i = length - 1; i >= 0; i--) {
        result = ""
        symbol = Number(text.charAt(i))
        deciCode = symbol + 33
        output = String.fromCharCode(deciCode)
        for (let x = 0; x < symbol; x++) {
            result += output
        }
        if (symbol == 0) {
            result = "ZERO"
        }
        console.log(result)
    }
}
main(2049)
