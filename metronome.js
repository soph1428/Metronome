var metronomeLabel = document.getElementById(`metronome`),
clickSound = document.createElement(`audio`),
metronomeInterval = ``,change = 2, started = false
clickSound.src = `click.wav`
document.getElementById(`start`).onclick = metronome
document.getElementById(`stop`).onclick = function() {clearInterval(metronomeInterval), started = false, metronomeLabel.style.color = ``}
function metronome() {
    started = true
    clearInterval(metronomeInterval)
    metronomeInterval = setInterval(() => {
        console.log(metronomeLabel.style.background)
        metronomeLabel.style.color = [``, `white`].find(str => str != metronomeLabel.style.color)
        clickSound.play()
    }, 60000 / metronomeLabel.textContent.split(` `)[0])
} document.addEventListener(`keydown`, e => {if (e.key == `ArrowUp`) changeTempo(change)})
document.addEventListener(`keydown`, e => {if (e.key == `ArrowDown`) changeTempo(-change)})
function changeTempo(direction) {
    if ((metronomeLabel.textContent.split(` `)[0] - change >= change && direction == -change) || (Number(metronomeLabel.textContent.split(` `)[0]) + change <= 200 && direction == change)) {
        metronomeLabel.textContent = `${Number(metronomeLabel.textContent.split(` `)[0]) + direction} bpm`
        if (started) metronome()
    }
}