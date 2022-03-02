import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';


const _ff639bc8ce06aa6cf36c89223bb5376c = styled.View`
background-color: #444;
margin: 0;
`;

const _762269dcd79a1f444d327977a4676287 = styled.View`
`;

const _3992d08c9330ced40ed10cb4b6c0da9a = styled.TouchableOpacity`
`;

const _4cd606ed96227512f9c178b2f5d2e581 = styled.Text`
`;

const _88a139322bc6827ef8b21f779f7efa51 = styled.View`
background-color: #ccc;
width: 100%;
align-items: center;
display: flex;
height: 50px;
`;

const _8ac2e18e8198ef85cd8d5c5ffbe8da7d = styled.TouchableOpacity`
border: 0;
background-color: transparent;
cursor: pointer;
margin: 0 15px;
`;

const _d540341ce1db0f3ea7bad4b1d6ae0640 = styled.Image`
`;


function HomeScreen(props) {


useEffect(() => {
}, []);

return (
<_ff639bc8ce06aa6cf36c89223bb5376c>
<_88a139322bc6827ef8b21f779f7efa51 id="status-bar">
<_8ac2e18e8198ef85cd8d5c5ffbe8da7d OnPress={() => props.route.params.query="mobilang:screen:home"} id="menu-btn">
<_d540341ce1db0f3ea7bad4b1d6ae0640 source={{uri: 'https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png'}}>
</_d540341ce1db0f3ea7bad4b1d6ae0640>
</_8ac2e18e8198ef85cd8d5c5ffbe8da7d>
</_88a139322bc6827ef8b21f779f7efa51>
<_762269dcd79a1f444d327977a4676287 id="items">
<_3992d08c9330ced40ed10cb4b6c0da9a onPress="() => props.route.params.query = 'mobilang:screen:glossary')">
<_4cd606ed96227512f9c178b2f5d2e581>
Glossário
</_4cd606ed96227512f9c178b2f5d2e581>
</_3992d08c9330ced40ed10cb4b6c0da9a>
</_762269dcd79a1f444d327977a4676287>
</_ff639bc8ce06aa6cf36c89223bb5376c>
);
}

export default HomeScreen;

