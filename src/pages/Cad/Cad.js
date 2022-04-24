 
import {Main,Container} from './styles'
import Head   from "../../components/Head/Head";
import Tabela from '../../components/Tabela/Tabela';

const Data = [
    {
       codigo: 'https://www.google.com',
       titulo: 'Orientação vale',
       setor: 'teste1'
   },
   
    {
       codigo: 'https://www.youtube.com',
       titulo: 'del vale',
       setor: 'dateste'
   }
   ,
   
   {
       codigo: 'https://www.google.com',
       titulo: 'Orientação vale',
       setor: 'teste3'
   },
   
   {
       codigo: 'https://www.google.com',
       titulo: 'Orientação vale',
       setor: 'teste4'
   },
   
   
   ]

function Cad(){
    return(
        <>
            <Head></Head>
             <Main>
                    <Container>
                    <form>
                        <label>
                            setor:
                            <select>
                            {Data.map((item, i) =>{
                        return(
                            
                                <option value={i}>{item.setor}</option>
                             
                        )
                    })}
                            </select>

                            tipo: 
                            <select name="select">
                                    <option value="INFORMATIVOS" selected>INFORMATIVOS</option>
                                    <option value="FLUXOGRAMAS">FLUXOGRAMAS</option>
                                    <option value="FORMULARIOS">FORMULARIOS</option>
                                    <option value="PROCEDIMENTOS">PROCEDIMENTOS</option>
                                    <option value="PROTOCOLOS">PROTOCOLOS</option>
                                    <option value="REGIMENTOS">REGIMENTOS</option>
                                    <option value="TERMOS">TERMOS</option>
                            </select>
                            
                        </label>
                        <input type="submit" value="Enviar" />
                        


                        </form>
                    </Container>
              </Main>
    </>
    )
}

export default Cad;