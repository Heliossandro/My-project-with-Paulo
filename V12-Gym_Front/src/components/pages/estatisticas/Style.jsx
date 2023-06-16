import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #f8f8f8;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  form{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Statistic = styled.div`
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StatisticTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

export const StatisticData = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StatisticItem = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  color: #666;
`;
