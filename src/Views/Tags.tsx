import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Link} from 'react-router-dom';
import {Button} from '../components/Button';
import {Center} from '../components/Center';


const TagList = styled.ol`
  font-size: 16px;
  background: white;

  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;


    > a {
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Space = styled.div`
  height: 48px;
`;

function Tags() {
    const {tags} = useTags();
    return (
        <Layout>
            <TagList>
                {
                    tags.map(tag =>
                        <li key={tag.id}>
                            <Link to={'/tags/' + tag.id}>
                                <span>{tag.id}:{tag.name}</span>
                                <Icon name="Right"/>
                            </Link>
                        </li>
                    )}
            </TagList>
            <Center>
                <Space/>
                <Button>新增标签</Button>
            </Center>

        </Layout>
    );
}

export default Tags;