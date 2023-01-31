import './App.css';
import React,{useState} from 'react';
import axios from "axios";

export default function Table({board,setBoard}){
    const getData = async()=>{
        const api = "https://cy80u1bnd1.execute-api.us-east-1.amazonaws.com/Stage/api/v1/other_charges";
        const dataObj = await axios.get(api);
        
        return dataObj;
      }
    const getRows = async()=>{
    const values =  await getData();
        const rows = values.data.data;
        
    const table = (rows)=>{
        let tRows = []
        for(let i =0; i<rows.length; i++){
         
            tRows.push(
              
                <tr>
    
                    <td><a href='#'>{rows[i].ID}</a></td>
                    <td>{rows[i].name}</td>
                    <td>{rows[i].type}</td>
                    <td>{rows[i].mode}</td>
                    <td>{rows[i].application_mode}</td>
                    <td>{rows[i].amount}</td>
        
                </tr>
            )
    
        }
        return <div> <table className="board">
            <thead>
                <th>ID</th>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Modo</th>
                <th>  Modo aplicacion  </th>
                <th>Valor</th>
                
                
            </thead>
                {tRows}
            </table></div>
    }
    
    setBoard(table(rows))
    


    }
    
    React.useEffect(()=>{
        getRows();
    },[])


    return(<React.Fragment>
    
     {board}
       
       

    </React.Fragment>);
}
