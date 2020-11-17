import React from 'react'
import styled from 'styled-components'
import elephantcookies from '../images/elephantcookies.png'
import monarchgenerator from '../images/monarchgenerator.png'

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
margin-bottom:2.5%;
`
const ImageDiv = styled.div`
margin:auto;
display:flex;
justify-content:flex-end;
`

const CenterTitle = styled.div`
display:flex;
justify-content:center;
margin-top: 2.50%;
margin-bottom: 0.50%;
`
const WidthDiv = styled.div`
width:50%;
`
const TextSpan = styled.span`
display:flex;
padding:1%;
margin-top:1%;
width:80%;
`
const Image = styled.img`
width:75%;`

function Projects(){
    return(
        <div>
            <CenterTitle><h2>Projects</h2></CenterTitle>

            <CenterDiv>
            <h3>Elephant Cookies</h3>
            Recipe book template for a Vegan Cookbook
            <TextSpan>
            <WidthDiv>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
                </WidthDiv>
                <a href="https://frosty-nobel-b96fa9.netlify.app/" target="_blank">
                <ImageDiv><Image src={elephantcookies}/></ImageDiv>
                </a>
            </TextSpan>
           
        </CenterDiv>

        <CenterDiv>
            <h3>Monarch Generator</h3>
            Randomly create a name for a King or Queen.
            <TextSpan>
            <WidthDiv>
                <ul>
                    <li>HTML</li>
                    <li>styled-components</li>
                    <li>React</li>
                    <li>JavaScript</li>
                </ul>
                </WidthDiv>
                <a href="https://focused-pike-c69a9f.netlify.app/" target="_blank">
                <ImageDiv> <Image src={monarchgenerator}/></ImageDiv></a>
            </TextSpan>
           
        </CenterDiv>
        </div>
    )
}

export default Projects