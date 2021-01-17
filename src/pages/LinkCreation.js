import React from 'react';
import {Row, Col, Container, Card, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBox from '../presentational/SearchBox';
import LinkCard1 from '../presentational/LinkCard1';
import LinkCard2 from '../presentational/LinkCard2';
import {faDna} from '@fortawesome/free-solid-svg-icons';


export default function Links(props) {
    return (

        <Container>
            <Row>
<Col><LinkCard1></LinkCard1><SearchBox></SearchBox></Col>
<Col><LinkCard2></LinkCard2><SearchBox></SearchBox></Col>
            </Row>
        </Container>
        );
    }