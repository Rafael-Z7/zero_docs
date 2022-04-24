import styles from 'styled-components';

export const Main = styles.div`
    width: 100vw;
    height: 100vh;
    background-color: white;

`

export const ContainerMaster = styles.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const DragArea = styles.div`
    width: 300px;
    height: 150px;
    border: 2px dotted  black;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.isDragActive && props.isDragReject === false ? 'lightgray' : 'white'};
    color : ${props => props.isDragReject === true ? 'red' : '#606666' }
     
`

export const FormStyle = styles.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;     
    height: 100%;
    width: 100%;

    label{
        margin: 5px;
    } 
  
` 

export const FormContainer = styles.div`
    width: 30vw;
    height: 50vh;
   
    select{
        width: 52%;
        height: 4vh;
        border-radius: 3px;
        background-color: transparent;
        font-family: inherit;
        font-size: inherit;
        cursor: inherit;
        line-height: inherit;
    }

    select:focus{
        outline:none;
    }

    label{
        font-family: unset;
    }

 
` 

export const InputStyle = styles.input`
width: 50%;
height: 5%;
margin: 10px; 
border: 0;
border-bottom: 1px solid black; 
:focus{
    outline:none;
}

`

export const Button = styles.div`
width: 100%;
height: 15%;
display: flex;
align-items: center;
flex-direction: row;
 
justify-content: center;

input{
    width: 32%;
    height: 45%;
    border: 0;
    background-color: rgb(34,34,34);
    color: white;
    :focus{
        outline:none;
    }

    :hover{
        background-color: black;
    }
    transition: 0.2s;
}

`
 