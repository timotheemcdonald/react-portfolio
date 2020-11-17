import React from 'react'
import styled from 'styled-components'

const CenterDiv = styled.div`
display:flex;
align-items:center;
flex-direction:column;
justify-content:space-around;
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
const TextSpan = styled.span`
padding:1%;
width:100%;
`


function Skills(){
    return(
        <div>
            <CenterTitle><h2>Skills</h2></CenterTitle>
            <CenterDiv>Here are some technologies and languages I'm comfortable with:
                <TextSpan>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>styled-components</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Node.js with Express</li>
                        <li>Express</li>
                        <li>SQLite</li>
                    </ul>
                </TextSpan>
                Here are some of my interpersonal 'soft' skills:
                <TextSpan>
                <ul>
                    <li>Creativity</li>
                    <li>Flexibility</li>
                    <li>Mutability</li>
                    <li>Adaptability</li>
                </ul>
                </TextSpan>
            </CenterDiv>
        </div>
    )
}

export default Skills