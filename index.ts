const isAwesome: boolean = true

function sum(number1: number, number2: number): number {
    return number1 + number2
}

sum(1,2)
// sum(1, "Fred")

// function updateHeading() {
//     const h1: HTMLElement | null = document.querySelector('h1')

//     // h1.textContent = 'New Heading'

//     return h1
// }

type person = {
    firstName: string,
    lastName: string
}

const kristine: person = {
    firstName: 'kristine',
    lastName: 'du'
}

const fruits: Array<string | number> = ['banana', 'apple', 3]