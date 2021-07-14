import React, { useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {
  CardBody,
} from "shards-react";
import './story.css';

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GetArticle } from "../../Store/modules/feed/actions";

import Navbar from '../../Components/NavBar';
import LikeShare from '../../Components/LikeShare/likeshare';
import ReadMore from '../../Components/ReadMore/readmore';

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

      <CardBody className='storyearea'>
          <h2 className="storyheading">{article.Title}</h2>
          <h6 className="storylikes">{article.Likes} Likes</h6>
          <h6><a href={`/user/${article.owner.username}`}>By {article.owner.username}</a></h6>
          <br />
          <br />
          <ReactMarkdown remarkPlugins={[gfm]} children={article.Content} className="storycontent"/>
          <LikeShare/>
          <ReadMore/>
      </CardBody>

    </div>
    );
  }

export default Story;
