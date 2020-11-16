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
max-width:60%;
margin-top:2.5%;
`


function Projects(){
    return(
        <div>
        <CenterDiv>
            <h2>Projects</h2>
        </CenterDiv>
        </div>
    )
}

export default Projects