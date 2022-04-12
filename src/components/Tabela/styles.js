import styles from 'styled-components';

export const Main = styles.div`
    width: 100vw;
    height: 80vh;
    background-color: rgb(26,66,102);
    margin-top: 0;
    display: flex;

`

export const Container = styles.div`
    width: 75%;
    margin-left: 14%;
    margin-top: 50px;
    background-color: white;
    border-right: 2px solid white;
    border-top: 1px solid white;
    display: flex;
    flex-direction: column;

    h1{
        text-align: center;
        color: white;
        font-family: 'Roboto', sans-serif;
    }

    p{
        color: white;
        text-align: justify;
        text-indent: 20px;
        margin-right: 10%;
        margin-left: 10%;
        font-size: 16px;
        font-weight: 9px;
    }
`

export const Table = styles.table`
  th, td {
    border-right: 1px solid black;
   
  }
  
    border-collapse: collapse;
     

    th {
        text-transform: uppercase;
    }

    td{
        height: 50px;
        text-indent: 15px;
        
    }
    
    tr:nth-child(even){
        background-color: #f2f2f2;
    }
`