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
margin-top:1%;
`
const LinkStyle = styled.a`
color:black;
background-color:white;
border:2px solid black;
padding: .25rem 1rem;
text-decoration:none;
margin-top:1rem;
`

function Contact(){
    return(
        <div>
            <CenterTitle><h2>Contact</h2></CenterTitle>
            <CenterDiv>
                <TextSpan>Want to get in touch? Feel free to send me a letter:</TextSpan>
                <TextSpan><LinkStyle href="mailto:timotheemcdonald@gmail.com">timotheemcdonald@gmail.com</LinkStyle></TextSpan>
                <TextSpan>We can also connect:</TextSpan>
                <TextSpan><LinkStyle href="https://www.linkedin.com/in/tim-d-mcdonald/" target="_blank">LinkedIn</LinkStyle></TextSpan>
                <TextSpan><LinkStyle href="https://github.com/timotheemcdonald" target="_blank">GitHub</LinkStyle></TextSpan>
                <TextSpan><LinkStyle href="https://twitter.com/timotheemc" target="_blank">Twitter</LinkStyle></TextSpan>
                </CenterDiv>
        </div>
    )
}

export default Contact