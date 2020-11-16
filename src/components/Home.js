import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const CenterDiv = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
margin: auto;
padding:2%;
margin-top:2.5%;
border: 3px solid #7f5539;
margin-left:20%; 
margin-right:20%;
border-radius:10px;
background-color:#ede0d4;
`


function Home(){
    const history = useHistory()

    return(
        <CenterDiv>
        My name is Tim McDonald and I am a full stack web developer open to employment opportunities. 
          </CenterDiv>
    )
}

export default Home