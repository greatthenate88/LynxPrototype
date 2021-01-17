import React from 'react'
import styled from 'styled-components'
import {Card} from 'react-bootstrap'
import sphinxofsecondsun from './images/sphinxofsecondsun.png'


const LC2 = styled.div`
    border-color:#009999;
    border-width:1px;
    border-style:solid;
    border-radius:10px;
    padding:3px;
    margin-left:auto;
    margin-right:auto;
    position:sticky;
    display:inline-block;
`;

export const LinkCard2 = (props) => {
    return (
             <LC2>
                 <img alt="sphinxofsecondsunimg" src={sphinxofsecondsun}/>
            </LC2>
    );
}
    export default LinkCard2;