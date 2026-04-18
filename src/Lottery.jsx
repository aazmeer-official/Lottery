import { useState } from "react"
import {newArr,sum} from "./helper"
export default function Lottery(){

    let [ticket, setTicket] = useState(newArr())
    let isWinning = sum(ticket) === 15;
    console.log(sum(ticket))
    let buyTicket = ()=>{
        setTicket(newArr())
    }
    return(
        <>
        <p>Lottery Ticket</p>
        <span>{ticket[0]},</span>
        <span>{ticket[1]},</span>
        <span>{ticket[2]}</span>
        <h3>{isWinning && "Congratulations , You won"}</h3>

        <button onClick={buyTicket}>Buy New ticket</button>
        </>
    )
}