var mouse_event = "empty"
var last_position_of_x, last_position_of_y
line_color = "black"
line_width = 3
canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
canvas.addEventListener("mousedown", mymousedown)
function mymousedown(e){
    mouse_event="mousedown"
}
canvas.addEventListener("mouseup", mymouseup)
function mymouseup(e){
    mouse_event="mouseup"
}
canvas.addEventListener("mouseleave", mymouseleave)
function mymouseleave(e){
    mouse_event="mouseleave"
}
canvas.addEventListener("mousemove", mymousemove)
function mymousemove(e){
    current_position_of_x = e.clientX-canvas.offsetLeft
    current_position_of_y = e.clientY-canvas.offsetTop
    if (mouse_event=="mousedown") {
             ctx.beginPath()
             ctx.strokeStyle=line_color
             ctx.lineWidth=line_width
            ctx.arc(current_position_of_x, current_position_of_y, 50, 0, 2*Math.PI)
             ctx.stroke()
    }
    last_position_of_x = current_position_of_x
    last_position_of_y = current_position_of_y
}