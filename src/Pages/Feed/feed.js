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
              <div className='feedarea'>
                  <CardBody>
                      <FeedNav />
                      <hr />

                      {articles.map((article, index) => (
                          <div key={index} style={{ width: "100%" }} className='feedcards'>
                              <CardImg src={article.Headerurl} style={{ width: "15%", height: "100%", margin: "1rem"}}/>
                              <CardTitle style={{ margin: "1.5rem"}}>{article.id}</CardTitle>
                              <a href={`/story/${article.Slug}`} style={{ width: "100%"}}>
                                <div style={{ margin: "1.5rem"}}>
                                    <CardTitle style={{ margin: "0"}}>{article.Title}</CardTitle>
                                    <p>{article.Description}</p>
                                </div>
                              </a>
                          </div>
                        ))}

                  </CardBody>
              </div>
            </Col>

            <Col>
                <Row>
                    <OurStoryCard />
                </Row>

              <Row className='onboardSection'>
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
