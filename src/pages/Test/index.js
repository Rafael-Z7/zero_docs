import React, {useCallback,useState, useEffect} from 'react'
import {Main, DragArea, FormStyle, FormContainer,ContainerMaster,InputStyle, Button} from './styles';
import DropZone from 'react-dropzone'
import Data from '../Home/data.js'

function Test(){
    const [ds_reg_doc, setRegDoc] = useState('');
    const [path, setDoc] = useState('');
    const [setor, setSetor] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [Public, setPublic] = useState();
    const [Files,setFiles] = useState();

    useEffect(() =>{

    })

    const renderDragMessage = useCallback((isDragActive, isDragReject) => {

        if (!isDragActive) {
            return (
              <div>Selecione ou arraste o arquivo aqui.</div>
            );
          }

        if (isDragReject) {
            return <div type="error">Arquivo não suportado</div>;
          }

        return <div type="success">Solte o arquivo aqui</div>;
      
      }, [])

    const  onUpload =   useCallback( (files) => { 
       setFiles(files);

    }, [])


    const Onsubmit = () =>{

    }

 

    return(
        <Main>
            <ContainerMaster>
            <DropZone 
            
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, text/xml, text/xls, text/xlsx,  text/csv, application/pdf"  
                    onDropAccepted={(files) => onUpload(files)}
                >
                            {({ getRootProps, getInputProps, isDragActive, isDragReject, isDragAccept }) => (
                    <DragArea  style={{backgroundColor: Files ? '#f7f7f7' : 'white'}}
                        {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                        isDragAccept = {isDragAccept}
                    >
                         
                        <input {...getInputProps()} data-testid="upload" />
                        { Files ? <div> {Files[0].path}</div> :  renderDragMessage(isDragActive, isDragReject, isDragAccept)}
                      
                       
                    </DragArea>
                )}
            </DropZone> 

            <FormContainer style={{display: Files ? 'flex' : 'none'}}>
                <FormStyle onSubmit={Onsubmit}>
                    <label></label>
                       <label>NOME DO ARQUIVO</label>
                        <InputStyle  placeholder="Nome do arquivo" value={ds_reg_doc}  onChange={e => setRegDoc(e.target.value)}/>
                        <label> INFORME O SETOR</label> 
                        <InputStyle  placeholder="Setor"  value={setor} onChange={e => setSetor(e.target.value)}/>
                        <div  style={{width: '100%', height: '15%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}> 
                        <label>SELECIONE A LOCALIDADE</label> 
                            <select onChange={e => setLocalidade(e.target.selected)}> 
                                 <option value={'INFORMATIVOS'}>INFORMATIVOS</option>
                                 <option value={'FLUXOGRAMAS'}>FLUXOGRAMAS</option>
                                 <option value={'FORMULARIOS'}>FORMULARIOS</option>
                                 <option value={'PROCEDIMENTOS'}>PROCEDIMENTOS</option>
                                 <option value={'PROTOCOLOS'}>PROTOCOLOS</option>
                                 <option value={'REGIMENTOS'}>REGIMENTOS</option>
                                 <option value={'TERMOS'}>TERMOS</option>
                            </select>
                        </div>

                       
                        <Button>
                            <input type="submit"  value="Enviar " /> 
                        </Button>
                  
                </FormStyle>
            </FormContainer> 
            </ContainerMaster>
        </Main>
    )
}

export default Test;