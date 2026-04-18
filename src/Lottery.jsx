import { useState } from "react"
import {genTicket,sum} from "./helper"
import Ticket from "./Ticket";
export default function Lottery({n= 3,winningSum = 15}){

    let [ticket, setTicket] = useState(genTicket(n))
    let isWinning = sum(ticket) === winningSum;
    console.log(sum(ticket))
    let buyTicket = ()=>{
        setTicket(genTicket(n))
    }
    return(
        <>
        <p>Lottery Ticket</p>
        <Ticket ticket={ticket}/>
        <h3>{isWinning && "Congratulations , You won"}</h3>

        <button onClick={buyTicket}>Buy New ticket</button>
        </>
    )
}