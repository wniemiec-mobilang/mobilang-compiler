import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';


const _1071008d91a0d06bd5d6c478983e314b = styled.View`
background-color: #222;
margin: 0;
`;

const _f6f204ec51a0bffa5dee0d43e5b16cdb = styled.View`
font-size: 15px;
margin: 10px;
font-family: Arial, Helvetica, sans-serif;
color: white;
`;

const _9b59433919ca12f493dbb83f44682356 = styled.View`
background-color: #ccc;
width: 100%;
align-items: center;
display: flex;
height: 50px;
`;

const _710c54e27f7ec02a7672ffe7c2357909 = styled.TouchableOpacity`
border: 0;
background-color: transparent;
cursor: pointer;
margin: 0 15px;
`;

const _1a3b9253696addf2fbb86b561f635dea = styled.Image`
`;

const _3ec27171497c58f992c955660dd407d9 = styled.TouchableOpacity`
border: 0;
background-color: transparent;
cursor: pointer;
margin: 0 15px;
`;

const _e8abdf77aab51b351c3ea4bc1e49ceb7 = styled.Image`
`;


function GlossarydescScreen(props) {

[glossary,setGlossary] = useState([]);

useEffect(() => {
const data=[{name: "Adenomegalia",description: "Linfonodos ou gânglios aumentados, também conhecidos como ínguas.",id: "1",type: "Condição",content: "Adenomegalia é o aumento dos linfonodos (ínguas). Pode estar presente em crianças e, na maior parte dos casos, é causada por infecções virais. Mais raramente podem ser causadas por doenças oncológicas tais como leucemias ou linfomas."},{name: "Alopécia",description: "Queda de cabelos",id: "2",type: "Condição",content: "A alopécia é a perda de cabelos do couro cabeludo ou de qualquer outra região do corpo. Em crianças em tratamento oncológico (quimioterapia ou radioterapia) a queda do cabelo pode acontecer. Nestes casos, uma vez terminado o tratamento o cabelo volta a crescer."}];
const id=props.route.params.query.split("?")[1].split("=")[1];
const glossaryItem=data.find((item) => item.id==id);
let _glossary=[];
_glossary=[``];
_glossary.push(`<><View id="glossary"><View class="header"><Text>${glossaryItem.name}</Text><Text>${glossaryItem.type}</Text></View><Text>${glossaryItem.description}</Text></View></>`);
setGlossary(_glossary);
}, []);

return (
<_1071008d91a0d06bd5d6c478983e314b>
<_9b59433919ca12f493dbb83f44682356 id="status-bar">
<_3ec27171497c58f992c955660dd407d9 OnPress={() => props.route.params.query="mobilang:screen:home"} id="menu-btn">
<_e8abdf77aab51b351c3ea4bc1e49ceb7 source={{uri: 'https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png'}}>
</_e8abdf77aab51b351c3ea4bc1e49ceb7>
</_3ec27171497c58f992c955660dd407d9>
<_710c54e27f7ec02a7672ffe7c2357909 OnPress={() => props.route.params.query="mobilang:screen:glossary"} id="back-btn">
<_1a3b9253696addf2fbb86b561f635dea source={{uri: 'http://cdn.onlinewebfonts.com/svg/img_259786.png'}}>
</_1a3b9253696addf2fbb86b561f635dea>
</_710c54e27f7ec02a7672ffe7c2357909>
</_9b59433919ca12f493dbb83f44682356>
<_f6f204ec51a0bffa5dee0d43e5b16cdb id="glossary">
</_f6f204ec51a0bffa5dee0d43e5b16cdb>
</_1071008d91a0d06bd5d6c478983e314b>
);
}

export default GlossarydescScreen;

