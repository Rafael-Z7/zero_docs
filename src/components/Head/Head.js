import react from "react";
import {Menu,Navbar, LinkStyle} from './styles';
import {Link} from 'react-router-dom';
 



function Head(){
    return(
        <Menu>
            <h1>Gestão eletrônica de documentos</h1>
            <Navbar>
                <ul>
                    <li><LinkStyle to="/content">Informativos</LinkStyle></li> 
                    <li><LinkStyle to="/content">Fluxogramas</LinkStyle></li>
                    <li><LinkStyle to="/content">Formularios</LinkStyle></li>
                    <li><LinkStyle to="/content">Procedimentos</LinkStyle></li>
                    <li><LinkStyle to="/content">Protocolos</LinkStyle></li>
                    <li><LinkStyle to="/content">Regimentos</LinkStyle></li>
                    <li><LinkStyle to="/content">Termos</LinkStyle></li>
                    <li><LinkStyle to="/content">Fique por dentro</LinkStyle></li>
                </ul>
        </Navbar>
    </Menu>
    )
}

export default Head;