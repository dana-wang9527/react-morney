import React, {ChangeEventHandler} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useTags} from '../Hooks/useTags';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Center} from '../components/Center';

type Params = {
    id: string
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background: white;
  line-height: 20px;
  padding: 14px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-top: 8px;
  background: white;

  > span {
    margin-right: 16px;
    white-space: nowrap;
    padding: 0 16px;
  }

  > input {
    display: block;
    width: 100%;
    height: 44px;
    background: none;
    border: none;

  }
`;

const Space = styled.div`
  height: 48px;
`;

const Tag: React.FC = () => {
    const {findTag, upDateTag, deleteTag} = useTags();
    let {id: idString} = useParams<Params>();
    const tag = findTag(parseInt(idString));
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        upDateTag(tag.id, {name: (e.target.value)});
    };
    const history = useHistory();
    const onClickBack = () => {
        history.goBack();
    };
    return (
        <Layout>
            <Header>
                <Icon name="left" onClick={onClickBack}/>
                <span>编辑标签</span>
                <Icon/>
            </Header>
            {tag ? <div>
                <Label>
                    <span>标签名</span>
                    <input type="text" placeholder='标签名' value={tag.name}
                           onChange={onChange}/>
                </Label>
                <Center>
                    <Space/>
                    <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
                </Center>
            </div> : <Center>当前标签已经被删除</Center>}
        </Layout>
    );
};

export {Tag};