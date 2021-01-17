import React from 'react'
import styled from 'styled-components'
import {Card} from 'react-bootstrap'
import manadrain from './images/manadrain.png'


const LC1 = styled.div`
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

export const LinkCard1 = (props) => {
    return (
             <LC1>
                 <img alt="manadrainimg" src={manadrain}/>
            </LC1>
    );
}
    export default LinkCard1;