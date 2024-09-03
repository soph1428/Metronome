var metronomeLabel = document.getElementById(`metronome`),
clickSound = document.createElement(`audio`),
metronomeInterval = ``, change = 1, started = false
clickSound.src = `click.mp3`
document.getElementById(`start`).onclick = metronome
document.getElementById(`stop`).onclick = function() {clearInterval(metronomeInterval), started = false, metronomeLabel.style.color = `white`}
function metronome() {
    started = true
    clearInterval(metronomeInterval)
    metronomeInterval = setInterval(() => {
        metronomeLabel.style.color = [``, `white`].find(str => str != metronomeLabel.style.color)
        clickSound.play()
    }, 60000 / metronomeLabel.textContent.split(` `)[0])
} document.addEventListener(`keydown`, e => {if (e.key == `ArrowUp`) changeTempo(change)})
document.addEventListener(`keydown`, e => {if (e.key == `ArrowDown`) changeTempo(-change)})
function changeTempo(direction) {
    if (metronomeLabel.textContent.split(` `)[0] - change >= change || direction == change) {
        metronomeLabel.textContent = `${Number(metronomeLabel.textContent.split(` `)[0]) + direction} bpm`
        if (started) metronome()
    }
}