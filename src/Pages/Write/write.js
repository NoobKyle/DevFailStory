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
  FormTextarea,
  Modal, ModalBody
} from "shards-react";
import './write.css';

import { useSelector, useDispatch } from 'react-redux';
import { SaveArticle } from "../../Store/modules/user/actions";
import { PublishArticle } from "../../Store/modules/user/actions";

import Navbar from '../../Components/NavBar';

const Write: React.FC = () => {

    const dispatch = useDispatch();
    const contentPublish = useSelector(state => state.user.write)

    const [title, setTitle] = useState('No Title');
    const [description, setDescription] = useState('No Description');
    const [headerurl, setHeaderurl] = useState('No Url');
    const [editor, setEditor] = useState('No Content');

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    function toggle(){
      setOpen(true);
      setTimeout(function(){ setOpen(false) }, 1000);
      console.log('Article has been saved !!!');
    }

    function toggle2(){
      setOpen2(true);
      setTimeout(function(){ setOpen2(false) }, 1000);
      console.log('Article has been published !!!');
      window.location.replace("/feed");
    }

    function SaveContent(){
      dispatch( SaveArticle(title, description, headerurl, editor))
      .then(() => {
        toggle();
      })
    }

    function PublishContent(){
      if( contentPublish.title === "No Title"){
        alert("Invalid Article !");
      }else{
        dispatch( PublishArticle( contentPublish ))
        .then(() => {
          toggle2();
        })
      }
    }

    return (
    <div>
      <Navbar />

      <Modal size="sm" open={open}>
        <ModalBody>📥 Article Saved!</ModalBody>
      </Modal>

      <Modal size="sm" open={open2}>
        <ModalBody>📥 Article Published!</ModalBody>
      </Modal>

      <Container className="writecontainer">
        <Row>
          <Col sm="12" md="8" lg="8">
              <CardBody className='writearea'>
                  <h3>{title}</h3>
                  <br/>
                  <Editor
                    autoFocus={true}
                    defaultValue=""
                    className='editorarea'
                    onChange={ (e) => setEditor(e()) }
                    />
              </CardBody>
          </Col>

          <Col>
              <Row>
                  <CardBody className='titlearea'>
                    <h5>Title</h5>
                    <FormInput placeholder="An Amazing Post" onChange={(e) => setTitle(e.target.value)} />
                    <br/>
                    <h6>Description</h6>
                    <FormTextarea onChange={(e) => setDescription(e.target.value)} />
                    <br/>
                    <h6>Header Image Url</h6>
                    <FormInput placeholder="https://website.com" onChange={(e) => setHeaderurl(e.target.value)} />
                    <br/>
                    <p>Enter the Title, Description and Header Image url for your post which will
                    be used on the main feed page to inform readers what your post
                    is about at first glance.</p>
                  </CardBody>
              </Row>

              <Row className='controls'>
                      <CardBody>
                        <h5>Controls</h5>
                        <p>This is why the next 12 months, I will be pulling back
                        the curtain on my business and providing a raw, real and
                        vulnerable look inside my entrepreneurial journey building
                        my new agency, Predictable Growth.
                        </p>
                        <Button outline onClick={() => { SaveContent() }}>Save</Button>
                        <Button outline onClick={() => { PublishContent() }}>Publish</Button>
                      </CardBody>
              </Row>
            </Col>
        </Row>
      </Container>

    </div>
    );
  }

export default Write;
