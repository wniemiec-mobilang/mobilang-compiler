import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';


const _4f9e1cb02c055a28739a5b26a757da94 = styled.View`
background-color: #444;
margin: 0;
`;

const _840bade83a7e82181e0c3b6a9b28a484 = styled.View`
font-size: 15px;
margin: 10px;
font-family: Arial, Helvetica, sans-serif;
color: white;
`;

const _b704da51331adef26a673a7cc8f07cff = styled.View`
background-color: #222;
`;

const _2eb64d4e1081c41ec98bca7cdb890c3e = styled.Text`
`;

const _1206de9847da1c478212b09fa06af9f0 = styled.View`
margin: 10px;
`;

const _6b5b1fd023ca2e50c226a91bb5235fe4 = styled.TextInput`
`;

const _8034592dfd669d12756353834a5204d7 = styled.View`
background-color: #ccc;
width: 100%;
align-items: center;
display: flex;
height: 50px;
`;

const _43b007df7af2ab990d67b699a997bd0 = styled.TouchableOpacity`
border: 0;
background-color: transparent;
cursor: pointer;
margin: 0 15px;
`;

const _ef3d027dd8f95d90ad48bc628f5ffa25 = styled.Image`
`;

const _11a523961a1667c7b37f2fc7e520d457 = styled.TouchableOpacity`
border: 0;
background-color: transparent;
cursor: pointer;
margin: 0 15px;
`;

const _7c5bb717d0293a0b0dec52f267f405bb = styled.Image`
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
<_4f9e1cb02c055a28739a5b26a757da94>
<_8034592dfd669d12756353834a5204d7 id="status-bar">
<_11a523961a1667c7b37f2fc7e520d457 OnPress={() => props.route.params.query="mobilang:screen:home"} id="menu-btn">
<_7c5bb717d0293a0b0dec52f267f405bb source={{uri: 'https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png'}}>
</_7c5bb717d0293a0b0dec52f267f405bb>
</_11a523961a1667c7b37f2fc7e520d457>
<_43b007df7af2ab990d67b699a997bd0 OnPress={() => props.route.params.query="mobilang:screen:home"} id="back-btn">
<_ef3d027dd8f95d90ad48bc628f5ffa25 source={{uri: 'http://cdn.onlinewebfonts.com/svg/img_259786.png'}}>
</_ef3d027dd8f95d90ad48bc628f5ffa25>
</_43b007df7af2ab990d67b699a997bd0>
</_8034592dfd669d12756353834a5204d7>
<_1206de9847da1c478212b09fa06af9f0 id="search">
<_6b5b1fd023ca2e50c226a91bb5235fe4>
</_6b5b1fd023ca2e50c226a91bb5235fe4>
</_1206de9847da1c478212b09fa06af9f0>
<_840bade83a7e82181e0c3b6a9b28a484 id="glossary">
<_2eb64d4e1081c41ec98bca7cdb890c3e>
Glossário
</_2eb64d4e1081c41ec98bca7cdb890c3e>
<_b704da51331adef26a673a7cc8f07cff id="glossary-content">
</_b704da51331adef26a673a7cc8f07cff>
</_840bade83a7e82181e0c3b6a9b28a484>
</_4f9e1cb02c055a28739a5b26a757da94>
);
}

export default GlossaryScreen;

