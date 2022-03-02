import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';


const _c752079acf05977ba28efabf99967d3c = styled.View`
background-color: #444;
margin: 0;
`;

const _646e166bea705d86aa70eb452651292 = styled.View`
`;

const _98884c139608328334e0d3eed9072ff1 = styled.TouchableOpacity`
`;

const _8a6014e121df188f5dd6ab1f6c2d18de = styled.Text`
`;

const _effce2d835db942de98036012abf2e67 = styled.View`
background-color: #ccc;
width: 100%;
align-items: center;
display: flex;
height: 50px;
`;

const _6daed528ca836153eee27e33286a67c5 = styled.TouchableOpacity`
border: 0;
background-color: transparent;
cursor: pointer;
margin: 0 15px;
`;

const _fffd97f2d3a2cddde4defd3138777e99 = styled.Image`
`;


function HomeScreen(props) {


useEffect(() => {
}, []);

return (
<_c752079acf05977ba28efabf99967d3c>
<_effce2d835db942de98036012abf2e67 id="status-bar">
<_6daed528ca836153eee27e33286a67c5 OnPress={() => props.route.params.query="mobilang:screen:home"} id="menu-btn">
<_fffd97f2d3a2cddde4defd3138777e99 source={{uri: 'https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png'}}>
</_fffd97f2d3a2cddde4defd3138777e99>
</_6daed528ca836153eee27e33286a67c5>
</_effce2d835db942de98036012abf2e67>
<_646e166bea705d86aa70eb452651292 id="items">
<_98884c139608328334e0d3eed9072ff1 onPress="() => props.route.params.query = 'mobilang:screen:glossary')">
<_8a6014e121df188f5dd6ab1f6c2d18de>
Glossário
</_8a6014e121df188f5dd6ab1f6c2d18de>
</_98884c139608328334e0d3eed9072ff1>
</_646e166bea705d86aa70eb452651292>
</_c752079acf05977ba28efabf99967d3c>
);
}

export default HomeScreen;

