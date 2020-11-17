import React from 'react'
import styled from 'styled-components'

const CenterDiv = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
border-bottom: .35rem solid #ced4da;
background-color:#f8f9fa;
padding:2%;
margin: auto;
max-width:55%;
margin-top:2.5%;
`
const CenterTitle = styled.div`
display:flex;
justify-content:center;
margin-top: 2.50%;
margin-bottom: 0.50%;
`

function Projects(){
    return(
        <div>
            <CenterTitle><h2>Projects</h2></CenterTitle>
        <CenterDiv>
            <h2>Projects</h2>
        </CenterDiv>
        </div>
    )
}

export default Projects