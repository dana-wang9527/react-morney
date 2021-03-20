import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.div`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;

  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      text-align: center;

      > a {
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        align-items: center;

        .icons {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tags">
                        <Icon name='label'/>
                        标签
                    </Link>
                </li>
                <li>
                    <Link to="/money">
                        <Icon name='money'/>
                        记账
                    </Link>
                </li>
                <li>
                    <Link to="/statistics">
                        <Icon name='statistics'/>
                        统计
                    </Link>
                </li>
            </ul>
        </NavWrapper>
    );
};

export default Nav;