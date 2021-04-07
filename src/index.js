import "./styles/index.scss"

const hello = {
    why: 'who knows'
}

const world = {
    ...hello,
    shit: true
}

console.log(world);
