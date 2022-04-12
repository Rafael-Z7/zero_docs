import styles from 'styled-components';


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
    
        margin-right: 20px;
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

export const Main = styles.div`
    width: 100vw;
    height: 80vh;
    background-color: rgb(26,66,102);
    margin-top: 0;
    display: flex;

`

export const Content = styles.div`
    width: 75%;
  
    margin-top: 50px;
    background-color: #f2f2f2;;
    border-right: 2px solid white;
    border-top: 1px solid white;
    display: flex;
    flex-direction: column;
    

    h2{
        text-align: center;
        color: black;
        font-family: 'Roboto', sans-serif;
        margin-top: 12vh;
    }

    p{
        text-align: justify;
        text-indent: 20px;
        margin-right: 10%;
        margin-left: 10%;
        font-size: 16px;
        line-height: 1.6;
      
        font-family: 'arial', sans-serif;
    }
`
export const Aside = styles.aside`
    width: 14%;
    background-color: rgb(91,155,213);
    margin-top: 50px;
    border-right: 1px solid white;
    border-top: 1px solid white;
   
   
    ul{
      
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center
         
    }

    li{
        width: 100%;
        margin-top: 25%;
        margin-left: -15%;
        padding: 10px;
        border-bottom: 1px solid white;
        text-align: start;
        text-transform: uppercase;
        color: white;
        cursor: pointer;
    }

    li:hover{
        color: rgb(26,66,102);
        transition: 0.3s;
    }

    
`