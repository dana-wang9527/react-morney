import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';

const Wrapper = styled.section`
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

type Props = {
    value: string;
    onChange: (value: string) => void
}

const NotesSection: React.FC<Props> = (props) => {
    const note = props.value;
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        props.onChange(e.target.value);
    };
    return (
        <Wrapper>
            <label>
                <span>备注</span>
                <input type="text" placeholder='在这里添加备注'
                       value={note} onChange={onChange}/>
            </label>
        </Wrapper>
    );
};

export {NotesSection};