import React from 'react';
import cs from 'classnames';
import styled from 'styled-components';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
    importAll(require.context('icons', true, /\.svg$/));
} catch (error) {
    console.log(error);
}

type Props = {
    name: string
} & React.SVGAttributes<SVGElement>

const Wrapper = styled.div`
  .icon {
    &.delete {
      width: 20px;
      height: 20px;
      color: #f00;
      margin: 0 8px;
    }

    &.edit {
      width: 20px;
      height: 20px;
      color: #00f;
      margin: 0 8px;
    }
  }

`;

const Icon = (props: Props) => {
    const {name, children, className,...rest} = props;
    return (
        <Wrapper>
            <svg className={cs('icon', className)} {...rest}>
                {props.name} &&<use xlinkHref={'#' + props.name}/>
            </svg>
        </Wrapper>
    );
};

export default Icon;
