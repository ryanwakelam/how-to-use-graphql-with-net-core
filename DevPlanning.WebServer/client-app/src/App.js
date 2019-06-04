import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';
import DevelopmentPlan from "./components/DevelopmentPlan";

const { Content } = Layout;

function App() {
  return (
      <Layout>
        <Layout style={{ padding: '24px 24px 24px' }}>
          <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
              <DevelopmentPlan />
          </Content>
        </Layout>
      </Layout>
  );
}

export default App;
