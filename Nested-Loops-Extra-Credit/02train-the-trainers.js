function main(num, array) {
    let jurycount = 0
    let juryNum = num
    let presentation = array.shift()
    let sum = 0
    let totalSum = 0
    while (presentation != "Finish") {
        sum = 0
        for (let i = 0; i < juryNum; i++) {
            let score = array.shift()
            sum += score
        }
        jurycount += juryNum
        average = sum / juryNum
        totalSum += sum
        console.log(`${presentation} - ${average.toFixed(2)}.`)
        presentation = array.shift()
    }
    totalAverage = totalSum / jurycount
    console.log(`Student's final assessment is ${totalAverage.toFixed(2)}.`)
}
main(2, ["While-Loop", 6.00, 5.50, "For-Loop", 5.84, 5.66, "Finish"])