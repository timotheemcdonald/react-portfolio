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


function About(){
    return(
        <div>
             <CenterTitle><h2>About</h2></CenterTitle>
            <CenterDiv>
                <TextSpan>
              I am a Full Stack Web Developer who enjoys making Web Applications that tell stories. I am comfortable with JavaScript, React, Redux, HTML, CSS, Node, Express and Styled Components. I have a passion for Game Design and creating collaborative, virtual worlds where players work together to meet their goals.I think outside the box and find creative solutions to solve problems.
              </TextSpan>
            <TextSpan>In my spare time I enjoy listening to Opera, watching Criterion Channel, and playing Sid Meier's Civilization VI</TextSpan>
            </CenterDiv>
     

        </div>
    )
}

export default About