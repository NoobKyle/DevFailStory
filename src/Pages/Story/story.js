import React, { useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from "shards-react";
import './story.css';

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GetArticle } from "../../Store/modules/feed/actions";

import Navbar from '../../Components/NavBar';

const Story: React.FC = () => {

    const dispatch = useDispatch();

    const article = useSelector(state => state.feed.article);

    var { id } = useParams();

    useEffect(() => {
      dispatch(GetArticle(id))
    },[dispatch, id]);

    return (
    <div>
      <Navbar />

      <Container>
        <Row>
            <Col sm="12" md="4" lg="8">
              <Card className='feedarea'>
                  <CardBody className='articlearea'>
                      <h3>{article.Title}</h3>
                      <br />
                      <h6>{article.Likes} Likes</h6>
                      <h6><a href={`/user/${article.owner.username}`}>By {article.owner.username}</a></h6>
                      <br />
                      <br />
                      <ReactMarkdown remarkPlugins={[gfm]} children={article.Content} />
                      <hr/>
                  </CardBody>
              </Card>
            </Col>

            <Col>
                <Row>
              <Card className='feedarea'>
                  <CardBody>
                    <h5>Our Story</h5>
                    <p>This is why the next 12 months, I will be pulling back
                    the curtain on my business and providing a raw, real and
                    vulnerable look inside my entrepreneurial journey building
                    my new agency, Predictable Growth.
                    </p>
                  </CardBody>
              </Card>
              </Row>

              <Row className='onboardSection'>
                  <Card className='feedarea'>
                      <CardBody>
                        <h5>Share your story</h5>
                        <p>This is why the next 12 months, I will be pulling back
                        the curtain on my business and providing a raw, real and
                        vulnerable look inside my entrepreneurial journey building
                        my new agency, Predictable Growth.
                        </p>
                        <p>This is why the next 12 months, I will be pulling back
                        the curtain on my business and providing a raw, real and
                        vulnerable look inside my entrepreneurial journey building
                        my new agency, Predictable Growth.
                        </p>
                        <p>This is why the next 12 months, I will be pulling back
                        the curtain on my business and providing a raw, real and
                        vulnerable look inside my entrepreneurial journey building
                        my new agency, Predictable Growth.
                        </p>
                      </CardBody>
                  </Card>
              </Row>
            </Col>
        </Row>
      </Container>

    </div>
    );
  }

export default Story;
