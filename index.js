const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const lineWidthInput = document.getElementById('lineWidth')
const colorInput = document.getElementById('color')

let drawing = false

function startDrawing(event) {
  drawing = true
  ctx.beginPath()
  ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)

}

function draw(event) {
  if(!drawing) return

  ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)
  ctx.lineWidth = lineWidthInput.value
  ctx.strokeStyle = colorInput.value
  ctx.lineCap = 'round'

  ctx.stroke()
}

function stopDraw() {
  drawing = false
  ctx.closePath()
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

canvas.addEventListener('mousedown', startDrawing)
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', stopDraw)
canvas.addEventListener('mouseout', stopDraw)
document.getElementById('clearCanvas').addEventListener('click', clearCanvas)
