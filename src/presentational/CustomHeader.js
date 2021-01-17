import React  from 'react';
import styled from 'styled-components';
import {Card, Row} from 'react-bootstrap';
import md_sss from './images/md_sss.png';
import manadrain from './images/manadrain.png';
import sphinxofsecondsun from './images/sphinxofsecondsun.png';
import SFMCard from './SFMCard.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDna} from '@fortawesome/free-solid-svg-icons';




const TheHeader = styled.div`
    width:100%;
    position:relative;
    font-size:25px;
    font-style:bold;
    color:whitesmoke;
    background-color:#4169E1;
    border-radius:5px;
    margin-top:10px;
    &:hover {
        border-radius:3px;
        background-color:#4169E5;
        color:antiquewhite;
    }
`;

const TestDiv = styled.div`
height:352px;
padding-top:49px;
.dna{
    margin-left:10px;
    margin-right:10px;
    height:50px;
    rotate:90deg;
}
`;

const element = <FontAwesomeIcon icon={faDna} />

export const CustomHeader = (props) => {
return (
<div>

    <TheHeader>Top Links Today</TheHeader>
    <br/>
    {/*<Card>
            <img 
            className="w-100"
            src={md_sss}
            alt="Mana Drain - Sphinx of the Second Sun"/>
            
    </Card>*/}

            
            <Card>
                <TestDiv>
            
                <img 
                    src={manadrain}
                    height="90%"
                    alt=""
                />

                <FontAwesomeIcon class="dna" size="1x" color="purple" icon={faDna} rotation="90"></FontAwesomeIcon>

                <img 
                    src={sphinxofsecondsun}
                    height="90%"
                    alt=""
                />
           
                </TestDiv>
            </Card>
            
            <br/>
            <SFMCard></SFMCard>
       
    
</div>
);
}
export default CustomHeader;