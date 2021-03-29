import Layout from '../components/Layout';
import React, {useState} from 'react';
import 'core-js';
import styled from 'styled-components';
import {RecordItem, useRecord} from '../Hooks/useRecord';
import {useTags} from '../Hooks/useTags';
import dayjs from 'dayjs';
import Icon from 'components/Icon';
import {CategorySection} from './Money/CategorySection';


const CategoryWrapper = styled.div`
  background: white;
`;

const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;
const Wrapper = styled.ul`
  > li {
    padding: 3px 5px;
    background: #fff;
    border-radius: 4px;
    margin: 10px 0;
    line-height: 25px;
    vertical-align: center;

    &::after {
      content: '';
      display: block;
      clear: both;
    }

    span {
      margin: 0 10px;

      &:nth-child(1) {
        float: left;
        font-size: 16px;
        margin-top: 5px;
      }

      &:nth-child(2) {
        float: left;
        color: #999999;
        margin-top: 10px;
      }

      &:nth-child(3) {
        float: right;
        margin-top: 8px;
      }

      &:nth-child(4) {
        float: right;
        font-size: 10px;
        margin-top: 4px
      }
    }
  }
`;



const Statistics: React.FC = () => {
    const [category, setCategory] = useState<('-' | '+')>('-');
    const {records, deleteRecord} = useRecord();
    const {getName} = useTags();
    const hash: { [key: string]: RecordItem[] } = {};
    const selectedRecords = records.filter(r => r.category === category);
    selectedRecords.forEach(r => {
        const key = dayjs(r.createAt).format('YYYY年MM月DD日');
        if (!(key in hash)) {
            hash[key] = [];
        }
        hash[key].push(r);
    });
    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
        return 0;
    });

    return (
        <Layout name="明细">
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={value => setCategory(value)}/>
            </CategoryWrapper>
            {array.length === 0 ?
                <div>暂无记录</div>
                : array.map(([date, records], index) => {
                    return (
                        <div key={index}>
                            <Header>{date}</Header>
                            <Wrapper>
                                {records.map((r, index) => {
                                    return (<li key={index}>
                                       <span className="tags">{r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)}</span>
                                         <span className="notes">{r.note}</span>
                                        <span className="amount">{category === '-' ? '-' : null}￥{r.amount}</span>
                                        <span onClick={() => {
                                            deleteRecord(records[index]);
                                        }}><Icon name="remove"/></span>
                                    </li>);
                                })}
                            </Wrapper>
                        </div>);
                })}
        </Layout>
    );
}


            export default Statistics;

