import { Card, Col, Row, Carousel } from 'antd';

import styles from './Services.less';
import { services } from '../../../constants';
import divideArr from '../../../utils/divideArray';

function Services({ dispatch, isMobile }) {

    const colCardConfig = {
        xl: {
            span: 8
        },
        sm: {
            span: 12
        },
        xs: {
            span: 24
        }
    }

    const mobileServiceArray = divideArr(services, 4);

    const mobileServicesBanner = mobileServiceArray.map((servicesList, index) => {
        const servicesSublist = servicesList.map((service, index) => {
            return (
                <Col key={index} {...colCardConfig}>
                    <i className={`iconfont ${service.icon}`}></i>
                    <p>{service.title}</p>
                </Col>
            )
        })
        return (
            <Row key={index}>
                {servicesSublist}
            </Row>
        )
    })

    const serviceList = services.map((service, index) => {
        return (
            <Col key={index} {...colCardConfig}>
                <i className={`iconfont ${service.icon}`}></i>
                <p>{service.title}</p>
            </Col>
        )
    })

    return (
        <div className={styles.services}>
            <div className={styles.header}>
                <div className={styles.title}>
                    Included Services
                </div>
                <div className={styles.sentence}>
                    You can start work when you are in
                </div>
            </div>
            <Card >
                {
                    isMobile ?
                        (<Carousel autoplay className={styles.content}>
                            {mobileServicesBanner}
                        </Carousel>) :
                        (
                            <Row className={styles.content}>
                                {serviceList}
                            </Row>
                        )
                }
            </Card>
        </div>

    );
}

export default Services;
