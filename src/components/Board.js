import React,{useState} from 'react'

import Square from './Square'

const Board = ({board, handleSquareClick}) => {

    // const [board,setBoard]= useState(Array(9).fill(null));

    // const [isXNext,setIsXNext]= useState(false);

    // console.log('Borad Rander',board)

    // // logic

    // const handleSquareClick = (position) =>{


    //     if(board[position]){
    //         return;
    //     }


    //     setBoard((prev)=>{
    //         return prev.map((square,pos) =>{
    //             if(pos === position){
    //                 return isXNext ? 'X':'0';
    //             }
    //             return square;
    //         });
    //     });


    //     setIsXNext((prev) => !prev);
    // };



    const randerSquare = (position)=>{
        return(
            <Square value={board[position]} onClick={() =>{handleSquareClick(position)}} />
        );
    }

    return (
        <div className="board">
            <div className="board-row">
            {randerSquare(0)}
            {randerSquare(1)}
            {randerSquare(2)}
            </div>
            <div className="board-row">
            {randerSquare(3)}
            {randerSquare(4)}
            {randerSquare(5)}

            </div>
            <div className="board-row">
            {randerSquare(6)}
            {randerSquare(7)}
            {randerSquare(8)}

            </div>
        </div>
    )
}

export default Board
