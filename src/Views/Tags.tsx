import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../Hooks/useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Button} from '../components/Button';
import {Center} from '../components/Center';
import {TopBar} from '../components/TopBar';


const Wrapper = styled.div`
  > ul > li {
    background: #ffffff;
    margin: 8px 0;
    padding: 0 12px;
    border-radius: 4px;
    min-height: 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;

    > .icons {
      display: flex;
      }
    }
`;

const Space = styled.div`
  height: 32px;
`;

const Tags: React.FC = () => {
    const {tags, upDateTag, deleteTag, addTag} = useTags();
    return (
        <Layout name="标签">
            <Wrapper>
                <TopBar name='全部标签'/>
                <ul>
                    {tags.map(tag => {
                        return <li key={tag.id}>
                            <span>{tag.name}</span>
                            <div className="icons">
                                <Icon name="edit" className="edit" onClick={() => {
                                    upDateTag(tag.id, {name: tag.name});
                                }}/>
                                <Icon name="delete" className="delete" onClick={() => {
                                    deleteTag(tag.id);
                                }}/>
                            </div>
                        </li>;
                    })}
                </ul>
                <Center>
                    <Space/>
                    <Button onClick={addTag}>
                        新增标签
                    </Button>
                </Center>
            </Wrapper>
        </Layout>
    );
};


export default Tags;