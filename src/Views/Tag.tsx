import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from '../useTags';
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
    const {tags} = useTags();
    let {id} = useParams<Params>();
    const tag = tags.filter(tag => tag.id === parseInt(id))[0];
    return (
        <Layout>
            <Header>
                <Icon name="left"/>
                <span>编辑标签</span>
                <Icon/>
            </Header>
            <div>
                <Label>
                    <span>标签名</span>
                    <input type="text" placeholder='标签名' value={tag.name}/>
                </Label>
            </div>
            <div>
                <Center>
                    <Space/>
                    <Button>删除标签</Button>
                </Center>
            </div>
        </Layout>
    );
};

export {Tag};