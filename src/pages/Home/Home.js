import {Menu,Navbar,Main,Content,Aside} from './styles'


function Home(){
    return(
        <div>
            <Menu>
                <h1>Gestão eletrônica de documentos</h1>
                <Navbar>
                    <ul>
                        <li>Informativos</li>
                        <li>Fluxogramas</li>
                        <li>Formularios</li>
                        <li>Procedimentos</li>
                        <li>Protocolos</li>
                        <li>Regimentos</li>
                        <li>Termos</li>
                        <li>Fique por dentro</li>
                    </ul>
                </Navbar>
            </Menu>
            
            <Main>
                <Aside>   
                    <ul>
                    <li>Norma zero</li> 
                    <li>Protocolo</li> 
                    <li>Procedimentos</li> 
                    <li>Formulario</li> 
                    <li>Regimento</li> 
                    <li>Revisao dos documentos</li> 
                    </ul>
                </Aside>
                <Content>
                    <h1>NORMA ZERO</h1>
                    <p>A Norma Zero consiste em um documento institucional norteador,
                         e é assim chamada por orientar a elaboração de todos os documentos da
                          instituição e a hierarquização existente entre eles, estabelecendo a padronização 
                          documental.Este padrão tem como objetivo definir os requisitos para organização, apresentação, 
                          conteúdo e controle da informação documentada. A informação documentada é formada por padrão gerencial, 
                          padrão de execução e padrão de registro, além de tabelas e fluxogramas. Também estabelece condições para o 
                          controle da informação z e dados integrantes, além de uma sistemática para identificar, coletar, indexar,
                           acessar, recuperar, arquivar, reter, armazenar, preservar (incluindo preservação de legalidade), proteger,
                            manter, dispor, controlar as alterações das informações documentadas e definir diretrizes para a organização
                             da documentação. Este padrão aplica-se a todas as unidades do Complexo Estadual de Saúde de São Gonçalo
                              contemplados pelo Hospital Estadual Alberto Torres, Hospital Estadual João Baptista Caffaro, UPA São Gonçalo
                               I no escopo definido pela NBR ISO 9001:2015.  A responsabilidade integral recai sobre a Qualidade que 
                               dimensiona uma metodologia flexível e adequada para a cultura organizacional e atendimento as exigências 
                               dos órgãos certificadores. Todos os demais setores, processos e pessoas envolvidas com documentos
                                (internos e externos) devem respeitar e seguir as definições e critérios aqui estabelecidos. 
                     </p>
                </Content>
            </Main>
            
        </div>
    )
}

export default Home;