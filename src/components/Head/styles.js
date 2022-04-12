import styles from 'styled-components';
import {Link} from 'react-router-dom'

export const Menu = styles.div`
    width: 100vw;
    height: 20vh;
    background-color: rgb(26,66,102);
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-between;
    border-bottom: 1px solid white;
    h1{
        margin-left: 35%;
        margin-bottom: 48px;
        margin-top: 35px;
        color: white;
        font-size: 20px;
        font-family: 'Helvetica', sans-serif;
        text-transform: uppercase;
      
    }
`

export const Navbar = styles.div`

    width: 75%;
    background-color: rgb(91,155,213);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 14%;
    border-radius: 5px;
    
    ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      
    }

   

    li{
    
        margin-right: 25px;
        list-style: none;
        color: white;
        text-transform: uppercase;
        font-family: 'Roboto Slab', sans-serif;
        font-weight: bold;
        cursor: pointer;
       

    }

    li:hover{
        color: rgb(26,66,102)
    }
   
`

export const LinkStyle = styles(Link)`
    color: white;
    list-style: none;
    color: white;
    text-transform: uppercase;
    font-family: 'Roboto Slab', sans-serif;
    font-weight: bold;
    cursor: pointer;

    :hover{
        color: rgb(26,66,102)
    }
    text-decoration: none;
    transition: 0.3s;
`
     