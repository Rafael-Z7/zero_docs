import {Menu,Navbar,Main,Content,Aside} from './styles'
import {Data} from './data';
import Head from '../../components/Head/Head';
import React, {useState} from 'react';


function Home(){

   const [text, setText] = useState(Data.norma_zero);
   const [title, setTitle] = useState('NORMA ZERO');
    
   function TextChanger(n){

    switch(n){
        case 1:  setText(Data.norma_zero); setTitle('NORMA ZERO'); 
        break;
     case 2 : setText(Data.protocolo); setTitle('PROTOCOLO');
         break;
     case 3 : setText(Data.Procedimentos); setTitle('PROCEDIMENTOS');
         break;
     case 4 : setText(Data.Regimento); setTitle('REGIMENTO');
         break;
     case 5 : setText(Data.Revisao_dos_documentos); setTitle('REVISÃO DOS DOCUMENTOS');
         break;
    }
}

    return(
        <div>
            <Head></Head>
            
            <Main>
                <Aside>   
                    <ul>
                    <li onClick={() => TextChanger(1)}>Norma zero</li> 
                    <li onClick={() => TextChanger(2)}>Protocolo</li> 
                    <li onClick={() => TextChanger(3)}>Procedimentos</li> 
                    <li onClick={() => TextChanger(4)}>Regimento</li> 
                    <li onClick={() => TextChanger(5)}>Revisao dos documentos</li> 
                    </ul>
                </Aside>
                <Content>
                    <h2>{title}</h2>
                    <p>{text}
                     </p>
                </Content>
            </Main>
            
        </div>
    )
}

export default Home;