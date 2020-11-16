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
border-bottom: 3px solid #ced4da;
margin-left:20%; 
margin-right:20%;
background-color:#f8f9fa;
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