import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaRegHeart, FaRegCommentDots, FaRegEye } from 'react-icons/fa';
import styles from './Styles/Cards.module.less';

export default function Cards() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [expandedCards, setExpandedCards] = useState({});

  const toggleReadMore = (idx) => {
    setExpandedCards((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const cardData = [
    {
      img: '../../../img/person.jpg',
      title: 'Now You Can Blog from Everywhere',
      date: 'Jul 19, 2022 • 1 min read',
      desc: "We've made it quick and convenient for you to manage your blog from anywhere. In this blog post, we’ll share the ways you can post to your blog from your phone, tablet, or desktop in seconds — even while sipping coffee at your favorite café.",
      views: 0,
      comments: 0,
      likes: 1
    },
    {
      img: '../../../img/person.jpg',
      title: 'Grow Your Blog Community',
      date: 'Jul 22, 2022 • 1 min read',
      desc: "You're not only sharing your voice with the world, you can also grow an active online community. To let readers sign up for updates, consider adding a subscription form or engaging comment section.",
      views: 0,
      comments: 0,
      likes: 2
    },
    {
      img: '../../../img/person.jpg',
      title: 'Design a Beautiful Blog',
      date: 'Jul 27, 2022 • 1 min read',
      desc: 'When it comes to design, our tools help you create beautiful blog posts that grab attention. Customize colors, fonts, layouts, and more — no coding required.',
      views: 0,
      comments: 0,
      likes: 0
    }
  ];

  return (
    <Container  fluid id="blog-cards" className={`pt-5 ${styles.cardSection}`}>
      <Row xs={1} sm={2} md={2} lg={3} xl={3}>
        {cardData.map((card, idx) => {
          const isExpanded = expandedCards[idx];

          return (
            <Col
              key={idx}
              md={6}
              lg={4}
              className="mb-4"
              data-aos="fade-up"
              data-aos-delay={`${idx * 100}`}
            >
              <Card className={`h-100 ${styles.card} ${isExpanded ? styles.expanded : ''}`}>
                <Card.Img
                  variant="top"
                  src={card.img}
                  alt={card.title}
                  className={styles.cardImage}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Subtitle
                    className={`mb-2 text-muted ${styles.cardMeta}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className={styles.author}>Admin</span> — {card.date}
                  </Card.Subtitle>

                  <Card.Title
                    className={styles.cardTitle}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <em>{card.title}</em>
                  </Card.Title>

                  <div className={styles.cardTextWrapper}>
                    <Card.Text
                      className={styles.cardText}
                      style={
                        isExpanded
                          ? {
                              WebkitLineClamp: 'unset',
                              maxHeight: 'none',
                              overflow: 'visible',
                            }
                          : {}
                      }
                      onClick={(e) => e.stopPropagation()}
                    >
                      {card.desc}
                    </Card.Text>
                    {!isExpanded && <div className={styles.fadeOverlay} />}
                    <button
                      className={styles.readMoreBtn}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleReadMore(idx);
                      }}
                    >
                      {isExpanded ? 'Show Less' : 'Read More'}
                    </button>
                  </div>

                  <div
                    className={`d-flex justify-content-between mt-auto pt-3 ${styles.cardStats}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>
                      <FaRegEye /> {card.views} views
                    </span>
                    <span>
                      <FaRegCommentDots /> {card.comments} comments
                    </span>
                    <span>
                      <FaRegHeart className={styles.heart} /> {card.likes}
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}