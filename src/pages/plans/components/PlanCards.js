import styles from './PlanCards.less';
import { Card, Col, Icon, Carousel } from 'antd';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Divider } from 'antd';

import { plans } from '../../../constants';
const ScrollOverPack = ScrollAnim.OverPack;
const { Meta } = Card;

function PlanCards({ dispatch, isMobile }) {

  const animConfig = {
    type: "bottom",
    interval: 300,
    duration: 2000
  }

  const colCardConfig = {
    xs: {
      span: 24
    },
    sm: {
      span: 12
    },
    lg: {
      span: 6
    }
  }

  const plansCardsMobile = plans.map((item, index) => {
    const planDescriptionlist = item.desicribtion.map((itemOfPlanDescription, index) => {
      return (
        <li style={{ paddingBottom: '10px' }} key={index}>
          {itemOfPlanDescription}
        </li>
      )
    })
    const planDescription = (
      <div>
        <ul style={{ listStylePosition: 'inside', paddingLeft: 0 }}>{planDescriptionlist}</ul>
      </div>
    )
    const adviceDescription = item.advice.map((itemOfadvice, index) => {
      return (
        <div key={index} style={{ paddingBottom: '10px' }}>
          <Icon type={itemOfadvice.icon} />
          <span style={{ paddingLeft: '10px' }}>{itemOfadvice.desicribtion}</span>
        </div>
      )
    })

    const cover = (
      <div className={styles.cover}>
        <div className={styles.coverContent} >
          <h2 >{item.title}</h2>
          <p>Starting at <b>{item.price}</b></p>
        </div>
        <img alt={item.title} src={item.cover} />
      </div>
    )

    return (
      <div key={index} className={styles.card}>
        <Card
          cover={cover}
          actions={[<div>Know more</div>]}
        >
          <div>
            <Meta
              style={{ height: '120px' }}
              description={planDescription}
            />
            <Divider />
            <Meta
              style={{ height: '150px' }}
              title={"Advice"}
              description={adviceDescription}
            />
          </div>
        </Card>
      </div>
    )
  })

  const plansCards = plans.map((item, index) => {

    const planDescriptionlist = item.desicribtion.map((itemOfPlanDescription, index) => {
      return (
        <li style={{ paddingBottom: '10px' }} key={index}>
          {itemOfPlanDescription}
        </li>
      )
    })
    const planDescription = (
      <div>
        <h4>Starting at <b>{item.price}</b></h4>
        <ul style={{ listStylePosition: 'inside', paddingLeft: 0 }}>{planDescriptionlist}</ul>
      </div>
    )
    const adviceDescription = item.advice.map((itemOfadvice, index) => {
      return (
        <div key={index} style={{ paddingBottom: '10px' }}>
          <Icon type={itemOfadvice.icon} />
          <span style={{ paddingLeft: '10px' }}>{itemOfadvice.desicribtion}</span>
        </div>
      )
    })
    return (
      <div key={index}>
        <Col className={styles.card} {...colCardConfig}>
          <Card
            cover={<img alt={item.title} src={item.cover} />}
            actions={[<div>Know more</div>]}
          >
            <Meta
              style={{ height: '220px' }}
              title={item.title}
              description={planDescription}
            />
            <Divider />
            <Meta
              style={{ height: '150px' }}
              title={"Advice"}
              description={adviceDescription}
            />
          </Card>
        </Col>
      </div>
    )
  })

  return (
    <ScrollOverPack className={styles.planCards}>
      <div key="header" className={styles.header}>
        <div className={styles.title}>
          Plans & Price
        </div>
        <div className={styles.subtitle}>
          Short-term agreements make things flexible
        </div>
      </div>

      {isMobile ?
        (<Carousel key="cards" className={styles.cards}>
          {plansCardsMobile}
        </Carousel >) :
        (<QueueAnim key="cards" className={styles.cards} {...animConfig}>
          {plansCards}
        </QueueAnim>)}
    </ScrollOverPack>
  );
}

export default PlanCards;
