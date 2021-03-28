import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  CardTitle,
  CardImg,
} from "shards-react";
import './feed.css';

import { useSelector, useDispatch } from "react-redux";
import { GetData } from "../../Store/modules/feed/actions";

import Navbar from '../../Components/NavBar';
import FeedNav from '../../Components/FeedNav';
import OurStoryCard from '../../Components/OurStoryCard';

const Feed: React.FC = () => {

  const dispatch = useDispatch();

  const articles = useSelector(state => state.feed.data);

  useEffect(() => {
    dispatch(GetData())
  },[dispatch]);

  return (
    <div>
      <Navbar />

      <Container>
        <Row>
            <Col sm="12" md="4" lg="8">
              <Card className='feedarea'>
                  <CardBody>
                      <FeedNav />
                      <hr />

                      {articles.map((article, index) => (
                          <div key={index} style={{ width: "100%" }} className='feedcards'>
                              <CardImg src="https://source.unsplash.com/random/300x200" style={{ width: "15%", height: "100%", margin: "1rem"}}/>
                              <CardTitle style={{ margin: "1.5rem"}}>{article.id}</CardTitle>
                                <div style={{ margin: "1.5rem"}}>
                                    <CardTitle style={{ margin: "0"}}>{article.Title}</CardTitle>
                                    <p>{article.Description}</p>
                                </div>
                          </div>
                        ))}

                  </CardBody>
              </Card>
            </Col>

            <Col>
                <Row>
                    <OurStoryCard />
                </Row>

              <Row className='onboardSection'>
                  <Card className='feedarea'>
                      <CardBody>
                        <h5>Top Stories</h5>
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

export default Feed;
