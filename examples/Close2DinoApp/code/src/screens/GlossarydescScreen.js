import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';


const _aaba32cb7c88740b8cd7ab59257c31b7 = styled.View`
background-color: #222;
margin: 0;
`;

const _a340d06542736adcc68ea5193283a0c0 = styled.View`
font-size: 15px;
margin: 10px;
font-family: Arial, Helvetica, sans-serif;
color: white;
`;

const _f186d70c9c4e0e579da73df80dfc14f6 = styled.View`
background-color: #ccc;
width: 100%;
align-items: center;
display: flex;
height: 50px;
`;

const _a8469678ae1b8e0846860086d151bafa = styled.TouchableOpacity`
border: 0;
background-color: transparent;
cursor: pointer;
margin: 0 15px;
`;

const _b8cc6ca761a356071953b2d300e5abaa = styled.Image`
`;

const _b4511ee767f57cb5a1c46e0ed8294812 = styled.TouchableOpacity`
border: 0;
background-color: transparent;
cursor: pointer;
margin: 0 15px;
`;

const _3ecd067e3b4c5416b60a22572a0567b8 = styled.Image`
`;


function GlossarydescScreen(props) {

[glossary,setGlossary] = useState([]);

useEffect(() => {
const data=[{name: "Adenomegalia",description: "Linfonodos ou g�nglios aumentados, tamb�m conhecidos como �nguas.",id: "1",type: "Condi��o",content: "Adenomegalia � o aumento dos linfonodos (�nguas). Pode estar presente em crian�as e, na maior parte dos casos, � causada por infec��es virais. Mais raramente podem ser causadas por doen�as oncol�gicas tais como leucemias ou linfomas."},{name: "Alop�cia",description: "Queda de cabelos",id: "2",type: "Condi��o",content: "A alop�cia � a perda de cabelos do couro cabeludo ou de qualquer outra regi�o do corpo. Em crian�as em tratamento oncol�gico (quimioterapia ou radioterapia) a queda do cabelo pode acontecer. Nestes casos, uma vez terminado o tratamento o cabelo volta a crescer."}];
const id=props.route.params.query.split("?")[1].split("=")[1];
const glossaryItem=data.find((item) => item.id==id);
let _glossary=[];
_glossary=[``];
_glossary.push(`<><View id="glossary"><View class="header"><Text>${glossaryItem.name}</Text><Text>${glossaryItem.type}</Text></View><Text>${glossaryItem.description}</Text></View></>`);
setGlossary(_glossary);
}, []);

return (
<_aaba32cb7c88740b8cd7ab59257c31b7>
<_f186d70c9c4e0e579da73df80dfc14f6 id="status-bar">
<_b4511ee767f57cb5a1c46e0ed8294812 OnPress={() => props.route.params.query="mobilang:screen:home"} id="menu-btn">
<_3ecd067e3b4c5416b60a22572a0567b8 source={{uri: 'https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png'}}>
</_3ecd067e3b4c5416b60a22572a0567b8>
</_b4511ee767f57cb5a1c46e0ed8294812>
<_a8469678ae1b8e0846860086d151bafa OnPress={() => props.route.params.query="mobilang:screen:glossary"} id="back-btn">
<_b8cc6ca761a356071953b2d300e5abaa source={{uri: 'http://cdn.onlinewebfonts.com/svg/img_259786.png'}}>
</_b8cc6ca761a356071953b2d300e5abaa>
</_a8469678ae1b8e0846860086d151bafa>
</_f186d70c9c4e0e579da73df80dfc14f6>
<_a340d06542736adcc68ea5193283a0c0 id="glossary">
</_a340d06542736adcc68ea5193283a0c0>
</_aaba32cb7c88740b8cd7ab59257c31b7>
);
}

export default GlossarydescScreen;

