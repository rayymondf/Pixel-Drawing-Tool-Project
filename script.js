const container = document.querySelector("#container")
let size = 16;


// for (let row = 0; row < size; row++) {
//     let temp_row = document.createElement("div");
//     temp_row.style.display = "flex";
//     temp_row.style.width = "500px";
//     temp_row.style.height = `${500 / size}px`;
//     container.appendChild(temp_row);

//     for (let col = 0; col < size; col++) {
//         let temp_col = document.createElement("div");
//         temp_col.style.width = `${500 / size}px`;
//         temp_col.style.height = `${500 / size}px`;
//         temp_col.style.outline = "1px solid black";
//         temp_row.appendChild(temp_col);
//     }
// }

create_Grid()

function grid_Size(){
    size = prompt("Enter the # of grids:")
    create_Grid()
}


function create_Grid(){
    container.replaceChildren()
    let pixels = 600/size;
    for(let box = 0; box < (size*size);box++){
        let temp_box = document.createElement("div")
        temp_box.style.width = `${pixels}px`
        temp_box.style.height = `${pixels}px`
        temp_box.style.background = `white`;
        temp_box.style.outline = `1px solid black`;
        temp_box.style.flexShrink = '0'
        container.appendChild(temp_box)
        let hoverTimer;

        temp_box.addEventListener("mouseover", ()=> {
            clearTimeout(hoverTimer);
            temp_box.style.backgroundColor = "black";
            hoverTimer = setTimeout(() => {
                temp_box.style.backgroundColor = "white";
                temp_box.style.outline = `1px solid black`;

            }, 500);
        })
    }
}

const erase = document.querySelector("#erase");
const grid = document.querySelector("#grid");

erase.addEventListener("click",create_Grid)
grid.addEventListener("click",grid_Size)
