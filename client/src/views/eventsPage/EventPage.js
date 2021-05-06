import React, {useEffect} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import styles from './EventPage.module.css';
import {Button, Empty, PageHeader, Tabs} from 'antd';
import {AimOutlined, UnorderedListOutlined} from '@ant-design/icons';
import Gmaps from '../../components/events/Gmaps';
import CalendarView from '../../components/events/CalendarView';
import CalendarLink from '../../components/events/CalendarLink';
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";

const {TabPane} = Tabs;

const EventPage = (props) => {
    console.log(window.location.href);

    //fb sdk a bit slow to load
    useEffect(() => {
        const timer = setTimeout(() => {
            window?.FB?.XFBML?.parse();
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Helmet>
                <title>Arrangementer - {props.venue}</title>
            </Helmet>
            <Container className={`bg-white shadow`}>
                <Row>
                    <Col>
                        <Link to={'/Arrangementer'}>
                            <PageHeader
                                className="site-page-header"
                                onBack={() => console.log(`test`)}
                                title="Arrangementer"
                                subTitle={props.venue}
                            />
                        </Link>
                    </Col>
                </Row>
                <Row className={`justify-content-center`}>
                    <Col sm={11}>
                        {props.img ? <img
                            src={`/${props.img}`}
                            className={`w-100 ${styles.bannerImg}`}
                            alt={'img'}
                        /> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}
                                    description={<p>Finner ikke tilhørende bilde</p>}
                        />
                        }
                    </Col>
                </Row>
                <Row className={`mt-5`}>
                    <Col>
                        <div className={`text-left`}>
                            <h1>Wellness at home - {props.venue}</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tabs defaultActiveKey="1">
                            <TabPane
                                tab={
                                    <span>
									<UnorderedListOutlined/>
									Main
								</span>
                                }
                                key="1">
                                <Row>
                                    <Col xs={12} sm={6} xl={6} md={6} lg={6}>
                                        <Row>
                                            <Col>
                                                <h5 style={{textDecoration: 'underline'}}>
                                                    Generell informasjon
                                                </h5>
                                                <p style={{whiteSpace: `pre-line`}}>{props.meta.desc}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h5 style={{textDecoration: 'underline'}}>
                                                    Åpningstider
                                                </h5>
                                                <p>
                                                    {props.date.date_start ? new Date(props.date.date_start * 1000)
                                                        .toLocaleDateString('en-GB')
                                                        .slice(0, 5) : null}
                                                    {props.date.date_start ? `-` : null}
                                                    {props.date.date_end ? new Date(props.date.date_end * 1000)
                                                        .toLocaleDateString('en-GB')
                                                        .slice(0, 5) : null}
                                                    <br/>
                                                    <br/>
                                                    <p style={{whiteSpace: `pre-line`}}>{props.meta.weekdays}</p>
                                                </p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h5 style={{textDecoration: 'underline'}}>Adresse</h5>
                                                <p>
                                                    {props.address.streetname ? `${props.address.streetname}, ${props.address.postalnr} ${props.address.city}` : null}
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={6} xl={6} md={6} lg={6} className={`mb-4 ${styles.calendarContainer}`}>
                                        <div className={`${styles.calendarView}`}>
                                            <CalendarView {...props} />
                                            <br/>
                                            <CalendarLink {...props} />
                                            <div
                                                className="fb-share-button"
                                                data-href={window.location.href}
                                                data-layout="button"
                                                data-size="large"
                                                style={{top: 5}}>
                                                <a
                                                    target="_blank"
                                                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                                                    className="fb-xfbml-parse-ignore">
                                                    Del
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
									<AimOutlined/>
									Kart og transport
								</span>
                                }
                                key="2">
                                <Row>
                                    <Col className={`mb-3 `}>
                                        <div className={`mb-2`}>
                                            <a target="_blank"
                                               href={`https://www.google.com/maps/search/?api=1&query=${props.pos.lat},${props.pos.lng}`}>
                                                <Button>Veibeskrivelse</Button>
                                            </a>
                                        </div>
                                        <Gmaps {...props} />
                                    </Col>
                                </Row>
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default EventPage;
