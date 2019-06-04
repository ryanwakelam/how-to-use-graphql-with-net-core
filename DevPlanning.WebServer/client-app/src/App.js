import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';
import DevelopmentPlan from "./components/DevelopmentPlan";
import {QueryRenderer} from 'react-relay'
import environment from "./components/Environment";
import graphql from 'babel-plugin-relay/macro';

const { Content } = Layout;
const AppQuery = graphql`
    query AppQuery {
        ...DevelopmentPlan_developmentPlanningQuery
    }
`;

function App() {
  return (
      <Layout>
        <Layout style={{ padding: '24px 24px 24px' }}>
          <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
              <QueryRenderer
                  environment={environment}
                  query={AppQuery}
                  render={({error, props}) => {
                      if(error) {
                          return <div>{error.message}</div>
                      } else if(props) {
                          return <DevelopmentPlan developmentPlanningQuery={props} />
                      }

                      return "Loading..."
                  }}
              />
          </Content>
        </Layout>
      </Layout>
  );
}

export default App;
