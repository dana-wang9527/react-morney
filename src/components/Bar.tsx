import React from 'react'
import styled from 'styled-components';
import Icon from './Icon';


const Wrapper = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 18px 20px;
    color: #fff;
    background: #f60;
    border-bottom: 1px solid rgba(255,255,255,0.5);
    .icon{
      width:25px;
      height:25px;
      fill:#fff;
    }
    >div {
      font-size: 22px;
      color: #ffffff;
    }
    >p {
      font-size: 15px;
    }
`;

type Props ={
    name:string;
}

const Bar = (props: Props)=>{
    return (
        <Wrapper>
            <Icon name='person'/>
            <div>梨子记账</div>
            <p>{props.name}</p>
        </Wrapper>
    )
};

export {Bar}