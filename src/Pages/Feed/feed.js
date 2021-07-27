import React, { useEffect } from "react";
import { CardBody, Container, Row, Col, CardTitle } from "shards-react";
import './feed.css';

import { useSelector, useDispatch } from "react-redux";
import { GetData } from "../../Store/modules/feed/actions";

import Navbar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import FeedNav from '../../Components/FeedNav';
import OurStoryCard from '../../Components/OurStoryCard';
import OnBoardCard from '../../Components/OnBoardCard';


const Feed: React.FC = () => {

  const dispatch = useDispatch();

  const articles = useSelector(state => state.feed.data);

  useEffect(() => {
    dispatch(GetData())
  },[dispatch]);

  return (
    <div>
      <Navbar />

      <Container className='maincontentcontainer'>
        <Row>
            <Col sm="12" md="9" lg="8">
                  <CardBody className='feedarea'>
                      <FeedNav />
                      <hr />

                      {articles.map((article, index) => (
                          <div key={index} className='feedcards'>
                              <a href={`/story/${article.Slug}`} style={{ width: "100%"}}>
                                <div className="articlewrapper">
                                    <CardTitle className="cardtitle">{article.Title}</CardTitle>
                                    <p className="articledescription">{article.Description}</p>
                                    <hr/>
                                </div>
                              </a>
                          </div>
                        ))}

                  </CardBody>
            </Col>

            <Col>
                <Row>
                  <OurStoryCard  />
                </Row>

              <Row >
                  <OnBoardCard />
              </Row>
            </Col>
        </Row>
      </Container>

      <Footer/>
    </div>
    );
  }

export default Feed;
