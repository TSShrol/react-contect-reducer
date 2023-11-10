import './App.css';
import React, { useContext, useState } from 'react';
import About from './components/About';
import Privacy from './components/Privacy';
import Home from './components/Home';
import Counter from './components/Counter.js';
// import Menu from './components/Menu';
import { Route, Routes } from "react-router-dom";
import { HomeOutlined, InfoCircleOutlined, FileDoneOutlined, LoginOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link } from "react-router-dom";
import Login from './components/Login';
import {AuthContext } from './context/Context.js';
import Modal from './components/Modal';
import { NumbersOutlined } from '@mui/icons-material';
import { CounterContext } from './context/ContextWithReducer';
import { useSelector } from 'react-redux';
import { selectCount } from './store/reducers/counter.reducer.js';
import Todos from './components/ToDo.jsx';

const { Header, Content, Footer, Sider } = Layout;
function App() {

  // const {count}=useContext(CounterContext);

  const count = useSelector(selectCount);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [userName, setUserName]=useState("Noname");
  const clearUserName=()=>userName="";
  return (
    <AuthContext.Provider value={{userName, setUserName, clearUserName}}>
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <p style={{color: 'white'}}>Counter: {count}</p>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={
           [{
              key: 1,
              icon: 
              <Link to={'/'}><HomeOutlined/></Link>,
              
              label: `Home`,
            },
            {
              key: 2,
              icon: 
              <Link to={'/about'}><InfoCircleOutlined /></Link>,
              
              label: `About`,
            },
            {
              key: 3,
              icon: 
              <Link to={'/privacy'}><FileDoneOutlined /> </Link>,
              
              label: `Privacy`,
            },
            {
              key: 4,
              icon: 
              <Link to={'/login'}><LoginOutlined /> </Link>,
              
              label: `Login`,
            },
            {
              key: 5,
              icon: 
              <Link to={'/counter'}><NumbersOutlined/> </Link>,
              
              label: `Counter`,
            },
            {
              key: 6,
              icon: 
              <Link to={'/'}><LoginOutlined />  </Link>,
              
              label: `${userName}`,
            }
           ]
          }
        />
      </Sider>
      <Layout>
        {/* <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        /> */}
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: "90vh",
              background: colorBgContainer,
            }}
          >
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/counter" element={<Todos/>}/>
          {/* <Route path="/counter" element={<Counter/>}/> */}
          
          
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>

          </div>
          <button onClick={()=><Modal />}>tttt</button>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    </AuthContext.Provider>
  );

//   return (
//     <div className='App'>
//       <header>
//         <h1>React PV114</h1>
//         <Menu/>
//       </header>
//       <main>
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/about" element={<About/>}/>
//           <Route path="/privacy" element={<Privacy/>}/>
//           {/* <Route path="*" element={<NotFound/>}/> */}
//         </Routes>
// {/* 
//         <About/>
//         <Privacy/> */}
        
//       </main>
//     </div>
//   );
}

export default App;
