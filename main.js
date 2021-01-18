const c = document.querySelector('#win')
const ctx = c.getContext('2d')
let players = []
let myChar = {}

    c.width = 800
    c.height = 600
    c.style.border = '1px solid gray'
    document.addEventListener('keydown', e => {
        switch (e.code){
            case 'ArrowLeft':
                socket.emit('moveLeft', myChar.id)
            break;
            case 'ArrowUp':
                socket.emit('moveUp', myChar.id)
            break;
            case 'ArrowRight':
                socket.emit('moveRight', myChar.id)
            break;
            case 'ArrowDown':
                socket.emit('moveDown', myChar.id)
            break;
        }
    })

player = function(name, x, y, width, height) {
    this.id = null
    this.name = name
    this.loc = { x: x, y: y }
    this.size = { w: width, h: height }
}

getRandom = (min, max) =>{
    let num = Math.random() * (max - min) + min
    return num
}

createPlayer = () =>{
    myChar = new player('Fulano', getRandom(0,700), getRandom(0, 500), 32, 32)
};createPlayer()

draw = () => {
    players.forEach((e,i) => {
        ctx.fillRect(players[i].loc.x, players[i].loc.y, 32, 32)
        ctx.fillText(`${players[i].name}`, players[i].loc.x, players[i].loc.y - 10)
    })
}

clear = () => ctx.clearRect(0,0,c.width, c.height)

loop = () =>{
    clear()
    draw()
    requestAnimationFrame(loop)
};loop()