import React, { useState } from "react";
import Editor from "rich-markdown-editor";
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  FormInput,
  FormTextarea
} from "shards-react";
import './write.css';

import Navbar from '../../Components/NavBar';

const Write: React.FC = () => {

    const [editor, setEditor] = useState('No Content');
    const [title, setTitle] = useState('No Title');
    const [description, setDescription] = useState('No Description');

    function logeditorstate(){
      console.log(title);
      console.log(description);
      console.log(editor);
    }

    function SaveContent(){
      console.log('Process : Article Saved');
      
    }

    return (
    <div>
      <Navbar />

      <Container>
        <Row>
          <Col sm="12" md="8" lg="8">
            <Card className='writearea'>
              <CardBody>
                  <h3>{title}</h3>
                  <br/>
                  <Editor
                    autoFocus={true}
                    defaultValue=""
                    className='editorarea'
                    onChange={ (e) => setEditor(e()) }
                    />
              </CardBody>
            </Card>
          </Col>

          <Col>
              <Row>
                <Card className='feedarea'>
                  <CardBody className='titlearea'>
                    <h5>Title</h5>
                    <FormInput placeholder="An Amazing Post" onChange={(e) => setTitle(e.target.value)} />
                    <br/>
                    <h6>Description</h6>
                    <FormTextarea onChange={(e) => setDescription(e.target.value)} />
                    <br/>
                    <p>Enter the Title and Description for your post which will
                    be used on the main feed page to inform readers what your post
                    is about at first glance.</p>
                  </CardBody>
                </Card>
              </Row>

              <Row className='onboardSection'>
                  <Card className='feedarea'>
                      <CardBody>
                        <h5>Controls</h5>
                        <p>This is why the next 12 months, I will be pulling back
                        the curtain on my business and providing a raw, real and
                        vulnerable look inside my entrepreneurial journey building
                        my new agency, Predictable Growth.
                        </p>
                        <Button outline onClick={() => { SaveContent() }}>Save1</Button>
                        <Button outline>Save</Button>
                        <Button outline>Save</Button>
                        <Button outline>Save</Button>
                        <Button outline>Save</Button>
                        <Button outline>Save</Button>
                        <Button outline>Save</Button>
                        <Button outline>Save</Button>
                      </CardBody>
                  </Card>
              </Row>
            </Col>
        </Row>
      </Container>

    </div>
    );
  }

export default Write;
