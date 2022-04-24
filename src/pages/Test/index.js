import React, {useCallback,useState} from 'react'
import {Main, DragArea, FormStyle, FormContainer,ContainerMaster,InputStyle, Button} from './styles';
import DropZone from 'react-dropzone'

function Test(){

    const [Files,setFiles] = useState();

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
                <FormStyle>
                <label>Nome do arquivo</label>
                        <InputStyle  placeholder="Nome do arquivo" />
                        <div  style={{width: '100%', height: '15%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}> 
                        <label  >Localidade</label> 
                            <select>
                                
                                <option value="name">name</option>
                                <option value="name2">name2</option>
                                <option value="name2">name3</option>
                                <option value="name2">name4</option>
                            </select>
                        </div>

                        <div style={{width: '100%', height: '15%',  margin: '20px',  display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                            <label>Setor</label>
                            <select>
                                <option value="setor1">setor1</option>
                                <option value="name2">setor1</option>
                                <option value="name2">setor1</option>
                                <option value="name2">setor1</option>
                                <option value="name2">setor1</option>
                                <option value="name2">setor1</option>
                                <option value="name2">setor1</option>
                                <option value="name2">setor1</option>
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