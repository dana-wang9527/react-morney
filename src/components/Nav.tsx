import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const Wrapper = styled.nav`
  background: #e5e5e5;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);

  > .item {
    width: 20%;
    padding: 5px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.selected {
      color: #f60;
    }
  }

`;

const Nav = () => {
    return (
        <Wrapper>
            <NavLink to="/home" className='item' activeClassName="selected">
                <Icon name="home"/>
                首页
            </NavLink>
            <NavLink to="/statistics" className='item' activeClassName="selected">
                <Icon name="detail"/>
                明细
            </NavLink>

            <NavLink to="/money" className='item' activeClassName="selected">
                <Icon name="money"/>
                记账
            </NavLink>

            <NavLink to="/tags" className='item' activeClassName="selected">
                <Icon name="label"/>
                标签
            </NavLink>

            <NavLink to="/echarts" className='item' activeClassName="selected">
                <Icon name="statistics"/>
                图表
            </NavLink>

        </Wrapper>
    );
};

export default Nav;