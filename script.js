const container = document.querySelector("#container")
const erase = document.querySelector("#erase")
const grid = document.querySelector("#grid")
const draw = document.querySelector("#draw")
const hover = document.querySelector("#hover")

let size = 25
let isDrawing = false
let drawMode = false

create_Grid();
hover.classList.add("active")


erase.addEventListener("click", create_Grid)
grid.addEventListener("click", grid_Size)

draw.addEventListener("click", () => {
    drawMode = true
    draw.classList.add("active")
    hover.classList.remove("active")

    
});

hover.addEventListener("click", () => {
    drawMode = false
    isDrawing = false
    hover.classList.add("active")
    draw.classList.remove("active")
});

document.addEventListener("mousedown", () => {
    if (drawMode) {
        isDrawing = true
    }
});

document.addEventListener("mouseup", () => {
    isDrawing = false
});

function grid_Size() {
    let temp_size = prompt("Enter the new grid length/width:")

    if (temp_size === null || temp_size.trim() === "") {
        return
    }

    temp_size = Number(temp_size)

    if (!Number.isInteger(temp_size) || temp_size <= 0) {
        return
    }

    size = temp_size;
    create_Grid()
}

function create_Grid() {
    container.replaceChildren();
    let pixels = 600 / size;

    for (let box = 0; box < size * size; box++) {
        let temp_box = document.createElement("div")
        temp_box.style.width = `${pixels}px`
        temp_box.style.height = `${pixels}px`
        temp_box.style.backgroundColor = "white"
        temp_box.style.outline = "1px solid black"
        temp_box.style.flexShrink = "0"

        container.appendChild(temp_box)

        hoverEvent(temp_box)
        drawEvent(temp_box)
    }
}

function hoverEvent(temp_box) {
    let hoverTimer;

    temp_box.addEventListener("mouseover", () => {
        if (!drawMode) {
            clearTimeout(hoverTimer);
            temp_box.style.backgroundColor = rgb()

            hoverTimer = setTimeout(() => {
                temp_box.style.backgroundColor = "white"
            }, 500);
        }
    });
}

function drawEvent(temp_box) {
    temp_box.addEventListener("mousedown", () => {
        if (drawMode) {
            temp_box.style.backgroundColor = rgb()
        }
    });

    temp_box.addEventListener("mouseover", () => {
        if (drawMode && isDrawing) {
            temp_box.style.backgroundColor = rgb()
        }
    });
}

function rgb() {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
}

