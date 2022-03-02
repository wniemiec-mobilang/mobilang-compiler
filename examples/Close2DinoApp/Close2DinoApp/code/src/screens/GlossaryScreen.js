import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';


const _1502b40186a289134e55023a39fb9868 = styled.View`
background-color: #444;
margin: 0;
`;

const _dc5a2ec1761c58228c132789c65d674e = styled.View`
font-size: 15px;
margin: 10px;
font-family: Arial, Helvetica, sans-serif;
color: white;
`;

const _451a6dc71e774e75af0e2a70b810cd55 = styled.View`
background-color: #222;
`;

const _32e07fd7fb9bbc47598b6b0b06f1135d = styled.Text`
`;

const _463080abced78fc2fddc41dfbc4136c6 = styled.View`
margin: 10px;
`;

const _c515ab49db17f4c07fed28c3980ce9f7 = styled.TextInput`
`;

const _203c68c6e2724e945abe83c1a5f6dd50 = styled.View`
background-color: #ccc;
width: 100%;
align-items: center;
display: flex;
height: 50px;
`;

const _8cbbaa065b56ef2d2efc9b4d63f03952 = styled.TouchableOpacity`
border: 0;
background-color: transparent;
cursor: pointer;
margin: 0 15px;
`;

const _b16420f8a7ee1e4fbb2fa7d5f98c9206 = styled.Image`
`;

const _1382bf54e9a73d1c59f85c54a254566b = styled.TouchableOpacity`
border: 0;
background-color: transparent;
cursor: pointer;
margin: 0 15px;
`;

const _e2917d8c91e63022430b9df08fb49ae4 = styled.Image`
`;


function GlossaryScreen(props) {

[glossary_content,setGlossary_content] = useState([]);
[glossaryContent,setGlossarycontent] = useState([]);

useEffect(() => {
function openDescription(item) {;
item.children[1].classList.toggle("item-content-open");
};
function makeGlossaryItemsClickable() {;
const items=document.querySelectorAll(".item");
for (let i="0";i<items.length;i++) {;
items.i.onclick=() => openDescription(items.i);
};
};
makeGlossaryItemsClickable();
const data=[{name: "Adenomegalia",description: "Linfonodos ou gânglios aumentados, também conhecidos como ínguas.",id: "1",type: "Condição",content: "Adenomegalia é o aumento dos linfonodos (ínguas). Pode estar presente em crianças e, na maior parte dos casos, é causada por infecções virais. Mais raramente podem ser causadas por doenças oncológicas tais como leucemias ou linfomas."},{name: "Alopécia",description: "Queda de cabelos",id: "2",type: "Condição",content: "A alopécia é a perda de cabelos do couro cabeludo ou de qualquer outra região do corpo. Em crianças em tratamento oncológico (quimioterapia ou radioterapia) a queda do cabelo pode acontecer. Nestes casos, uma vez terminado o tratamento o cabelo volta a crescer."}];
function loadGlossaryWithName(name="") {;
let _glossaryContent=[];
_glossaryContent=[``];
for (let item of data) {;
if (item.name.toLowerCase().startsWith(name.toLowerCase())) {;
_glossaryContent.push(`<><View class="item"><Text>${item.name}</Text><View class="item-content"><Text>${item.type}</Text><Text>${item.description}</Text><TouchableOpacity onPress="() => props.route.params.query = 'mobilang:screen:glossary-desc.html?id=${item.id}')"><Text>Leia mais</Text></TouchableOpacity></View></View></>`);
};
};
makeGlossaryItemsClickable();
};
loadGlossaryWithName();
const searchInput=document.getElementById("search").children[0];
searchInput.addEventListener("keyup",(event) => {;
loadGlossaryWithName(searchInput.value);
});
setGlossary_content(_glossary_content);
setGlossarycontent(_glossaryContent);
}, []);

return (
<_1502b40186a289134e55023a39fb9868>
<_203c68c6e2724e945abe83c1a5f6dd50 id="status-bar">
<_1382bf54e9a73d1c59f85c54a254566b OnPress={() => props.route.params.query="mobilang:screen:home"} id="menu-btn">
<_e2917d8c91e63022430b9df08fb49ae4 source={{uri: 'https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png'}}>
</_e2917d8c91e63022430b9df08fb49ae4>
</_1382bf54e9a73d1c59f85c54a254566b>
<_8cbbaa065b56ef2d2efc9b4d63f03952 OnPress={() => props.route.params.query="mobilang:screen:home"} id="back-btn">
<_b16420f8a7ee1e4fbb2fa7d5f98c9206 source={{uri: 'http://cdn.onlinewebfonts.com/svg/img_259786.png'}}>
</_b16420f8a7ee1e4fbb2fa7d5f98c9206>
</_8cbbaa065b56ef2d2efc9b4d63f03952>
</_203c68c6e2724e945abe83c1a5f6dd50>
<_463080abced78fc2fddc41dfbc4136c6 id="search">
<_c515ab49db17f4c07fed28c3980ce9f7>
</_c515ab49db17f4c07fed28c3980ce9f7>
</_463080abced78fc2fddc41dfbc4136c6>
<_dc5a2ec1761c58228c132789c65d674e id="glossary">
<_32e07fd7fb9bbc47598b6b0b06f1135d>
Glossário
</_32e07fd7fb9bbc47598b6b0b06f1135d>
<_451a6dc71e774e75af0e2a70b810cd55 id="glossary-content">
</_451a6dc71e774e75af0e2a70b810cd55>
</_dc5a2ec1761c58228c132789c65d674e>
</_1502b40186a289134e55023a39fb9868>
);
}

export default GlossaryScreen;

