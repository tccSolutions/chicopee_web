import React from 'react'
import styled, { keyframes } from 'styled-components';
import { slideInLeft } from 'react-animations';


const StaffCard = ({img, title,name, description, vacant})=>{
     // Animationed Components
  const fadeInAnimation = keyframes`${slideInLeft}`;
  const FadeDiv = styled.div`
    animation: 3s ${fadeInAnimation};
  `;

    return(
    <FadeDiv className='container position-relative col-lg-4 border border-2 border-dark pt-3 mb-3 rounded shadow bg-light' style={{'maxHeight':'25em', 'width':'20em'}}>
        <img src={img} alt='...' style={{'maxHeight': '25%'}}/>
        <h2>{title}</h2>
        <h4>{name}</h4>
        <h6>{description}</h6>
        {vacant? <a className='btn btn-primary w-75 position-absolute bottom-0 start-50 translate-middle' href='https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=12aec1e0-0217-4f3d-bc8d-3b0e64d0948b&ccId=19000101_000001&type=MP&lang=en_US&selectedMenuKey=CareerCenter' target="_blank">Apply</a>: ''}
    </FadeDiv>
)
    }

export default StaffCard