const runner = {
    first: "sachin",
    last: "tendulkar",
    country: "India",
    title: "God of cricket"
}

function print1(person){
    console.log(person.first, person.last)
}

print1(runner) // sachin tendulkar

function print2(person){
    const {first, last: second} = person
    console.log(first, second)
}

print2(runner) // sachin tendulkar

function print3({first, last: second}){
    console.log(first, second)
}

print3(runner) // sachin tendulkar

const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json'
]

function parseResponse([protocol, statusCode, contentType]){
    console.log(statusCode)
}
parseResponse(response) // 200 OK