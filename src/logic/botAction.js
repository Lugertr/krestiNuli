import victory from "./victory";

export function selectCell(fieldState,dif = false) {

    if (!dif) {
        const availCells = fieldState.filter((el)=> !el.state);
        if (!availCells.length)
            return null
        let numb = Math.floor(Math.random()*fieldState.length);
        if (!fieldState[numb].state)
            return fieldState[numb]
        return selectCell(fieldState)
    }
    else 
        return minimax(fieldState).cell 
}

function minimax(Currentfield, depth = 0, player=false)  {
    const availCells = Currentfield.filter((el)=> !el.state);
    if (victory(Currentfield)) {
        if (!player)
            return {score: depth - 10};
        else 
            return {score: 10 - depth};
    }
    else if (availCells.length === 0) {
        return {score: 0};
    }
    const moves = [];
    
    for (let i = 0; i < availCells.length; i++) {
        const move = {};
        move.cell = {...Currentfield[availCells[i].id]};
        Currentfield[availCells[i].id] = {...move.cell, state: true, player: player}
        const result = minimax(Currentfield, ++depth, !player);
        move.score = result.score;

        Currentfield[availCells[i].id]  = {...move.cell};

        moves.push(move);
    }
    let resIndex = null;

    if (!player) {
        let bestScore = -Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                resIndex = i;
            }
        }
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                resIndex = i;
            }
        }
    }

    return moves[resIndex];
} 

/*
const bestPlayInfo = minimax(currentBoardState, aiMark);

function hard(fieldState) { 

    let availableCells = fieldState.filter((el)=> !el.state);
    let moves = [];

    while (availableCells.length) {

        let cellStep = availableCells.pop()

        for (let i =0;i<availableCells.length; i++) {

            let info = {score:0, count:0, cell:{...cellStep}}
            let nextField = [...fieldState];
            let player = false;

            const makeStep = (cell) => {
                nextField[cell.id] = {id:cell.id, state: true, player: player}
                getScore(nextField);
            }

            const getScore = (field) => {
                if (victory(field) && player)
                    info.score--
                else if (victory(field) && !player)
                    info.score++
                info.count++;
            }

            makeStep(cellStep);
            if (info.score===0 && info.count<availableCells.length) {
                cellStep = availableCells[i];
                makeStep(cellStep)
            while (info.score===0 && info.count<availableCells.length) {
                    player = !player;
                    cellStep = availableCells[availableCells.length-info.count-1];
                    makeStep(cellStep);
                }
            }
            moves.push(info)
        }
        }

        console.log(moves)

        let res = moves.filter((prev) => prev.score>0);
        if (res.length === 0)
            {
                res = moves.filter((prev) => prev.score===0);
                if (res.length===0) 
                    res = moves.filter((prev) => prev.score<0);
            }
        return res.reduce((prev,next)=>(prev.count<next.count) ? prev: next ,0).cell

}

*/