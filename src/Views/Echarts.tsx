import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import {TopBar} from '../components/TopBar';
import {getDate} from '../lib/createAt';
import dayjs from 'dayjs';
import {RecordItem, useRecord} from '../Hooks/useRecord';
import {LineChart} from './Echart/LineChart';

const Wrapper = styled.div`
  .show{
    text-align: center;
    background: #f60;
    border-radius: 10px;
    padding:5px 0;
    >span{
      color: white;
    }
`;

const Echart = () => {
    const {records} = useRecord();
    const {year} = getDate();
    const {month} = getDate();
    const monthLastDay = dayjs().endOf('month').format('DD');
    const filterRecords = records.filter((record: RecordItem) => {
        const recordYear = dayjs(record.createAt).format('YYYY');
        const recordMonth = dayjs(record.createAt).format('MM');
        return recordYear === year && recordMonth === month;
    });
    const expenseRecords =
        filterRecords.filter((record: RecordItem) => {
            return record.category === '-';
        });
    const incomeRecords =
        filterRecords.filter((record: RecordItem) => {
            return record.category === '+';
        });
    const accountTotal = () => {
        let expense = 0;
        let income = 0;
        for (let i = 0; i < expenseRecords.length; i++) {
            expense += parseFloat(expenseRecords[i].amount);
        }
        for (let i = 0; i < incomeRecords.length; i++) {
            income += parseFloat(incomeRecords[i].amount);
        }
        return {expense,income}
    };
    const array = () => {
        const expenseArray = [];
        const incomeArray = [];
        const xArray = [];
        for (let i = 0; i < parseInt(monthLastDay); i++) {
            expenseArray[i] = 0;
            incomeArray[i] = 0;
            xArray[i] = i + 1;
        }
        for (let i = 0; i < expenseRecords.length; i++) {
            const index = parseInt(dayjs(expenseRecords[i].createAt).format('MM'));
            expenseArray[index + 1] += parseFloat(expenseRecords[i].amount);
        }
        for (let i = 0; i < incomeRecords.length; i++) {
            const index = parseInt(dayjs(incomeRecords[i].createAt).format('MM'));
            incomeArray[index + 1] += parseFloat(incomeRecords[i].amount);
        }
        return {expenseArray, incomeArray, xArray};
    };
    return (
        <Layout name='统计'>
            <Wrapper>
                <TopBar name={`${getDate().year}年${getDate().month}月`}/>
                <LineChart value={array()}/>
                <div className="show"><span>支出: {accountTotal().expense} 元 | 收入: {accountTotal().income} 元</span></div>
            </Wrapper>
        </Layout>
    );
};

export default Echart
