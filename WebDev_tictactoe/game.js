const maingrid = document.getElementById("maingrid");
const squares = Array.from(document.getElementsByClassName("square"));
const restart_button = document.getElementById("restart");


let game_title = document.getElementById("game_head_text");
// console.log(maingrid);
const grid_status = [null, null ,null ,null, null, null, null ,null, null];

const X = "X";
const O = "O";
const winning_state = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
var player = X;

// var grid_status = [];
const game_main = () => {
    
    // for (i=0; i<9; i++){
    //     grid_status.push(null);
    // }

    squares.forEach((square, index) =>{

        square.addEventListener("click", box_clicked);

    });
  
};

const box_clicked = (e) => {
    const id = e.target.id;
    console.log(id);

    if(!grid_status[id]){
    
   
        grid_status[id] = player;
        e.target.innerText = player;
        check_state();
       
        if(player == O)
            player = X;
        else    
            player = O;
              

    };

};

function check_state(){
    winning_state.forEach((item, index) =>{
        if( grid_status[item[0]+1] == player  && grid_status[item[1]+1] == player  && grid_status[item[2]+1] == player){     
            game_title.innerText =  `${player} is teh win`;
            return true;
        }            
        else{
            console.log("nop");
            return false;


        }         
    
    })
}
restart_button.addEventListener("click",() => {
    grid_status.forEach((item, index) =>{
        grid_status[index] = null;
    });
    squares.forEach((square)=> {
        square.innerText = " ";
    });
    game_title.innerHTML = "Tic Tac Toe"

});

game_main();