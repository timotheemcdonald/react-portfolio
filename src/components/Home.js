import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const CenterDiv = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
border-bottom: .35rem solid #ced4da;
background-color:#f8f9fa;
padding:2%;
margin: auto;
max-width:60%;
margin-top:2.5%;
`

const CenterTitle = styled.div`
display:flex;
justify-content:center;
margin-top: 0.50%;
margin-bottom: 0.50%;
`



function Home(){
    const history = useHistory()

    return(
        <div>
            <CenterDiv><h2>Welcome</h2></CenterDiv>
        <CenterDiv>
        My name is Tim McDonald and I am a full stack web developer open to employment opportunities. 
          </CenterDiv>
          </div>
    )
}

export default Home