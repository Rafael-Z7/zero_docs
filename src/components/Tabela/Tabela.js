 
import {Main,Container, Table} from './styles'
import {Data} from './Data'

function Tabela(){
    return(
        <Main>
        <Container>
            <h2 style={{textAlign: "center", marginBottom: '25px'}}>INFORMATIVOS</h2>
            <Table>
                <thead>
                      <th style={{width: '40%'}}>codigo</th>
                      <th style={{width: '45%'}}>titulo do procedimentos</th>
                      <th>setor</th>
                </thead>
                <tbody>
                    {Data.map((item, i) =>{
                        return(
                            
                                <tr key={i}>
                                    <td>{item.codigo}</td>
                                    <td>{item.setor}</td>
                                    <td>{item.titulo}</td>
                                </tr>
                             
                        )
                    })}
                
                </tbody>
                
               
            </Table>
        </Container>
    </Main>
    )
}

export default Tabela;