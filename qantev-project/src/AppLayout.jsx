import { Layout, Menu, Space } from 'antd';
import { Link } from 'react-router-dom';
import QantevFooter from './assets/qantev_footer.svg';
import QantevHeader from './assets/qantev_header.svg';

const { Header, Content, Footer } = Layout;

// eslint-disable-next-line react/prop-types
function AppLayout({ children }) {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{display: 'flex', minHeight: '100%'}}>
                <Menu theme='dark' mode='horizontal' >
                    <a href='https://www.qantev.com/' style={{alignSelf:'center',size:'40%', height: '100%', padding:'2%'}}>
                        <img src={QantevHeader} alt='Qantev Header'/>
                    </a>
                    
                    <b>
                        <Menu.Item style={{marginLeft: '50%', fontSize: '3vh' }}>
                            <Link  to='/'>Table</Link>
                        </Menu.Item>
                    </b>
                </Menu>
            </Header>

            <Content style={{ margin: '50px' }}>
                {children}
            </Content>

            <Footer align='center' style={{
                background: "#001529",
                color: 'white'
            }}>
                <Space direction="horizontal" align="center">
                <a href='https://www.qantev.com/' >
                    <img src={QantevFooter} alt="Qantev Footer" style={{
                        height: '100px',
                        alignSelf: 'center',
                        marginRight: '6vh'
                    }} />
                    </a>
                    © Copyright 2023 Qantev SAS. All rights reserved.
                </Space>
            </Footer>
        </Layout>
    );
}

export default AppLayout;
