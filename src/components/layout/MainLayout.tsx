// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from "antd";


// import { createElement } from "react";
const { Content, Footer, Header, Sider } = Layout;

const items : MenuProps['items'] = [
    {
        key: '1',
        label: 'Dashboard'
    },
    {
        key: '2',
        label: 'User Management',
        children : [
            {
                key: '21',
                label: 'Create Student'
            },
            {
                key: '22',
                label: 'Manage Student'
            }
        ]
    },
    {
        key: '3',
        label: 'Profile',
        children: [
            {
                key: '31',
                label: 'Settings'
            },
            {
                key: '32',
                label: 'Saved'
            }
        ]
    },
]


const MainLayout = () => {
    return (
        <Layout style={{ height: "100vh" }} >
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
                <div style={{ 
                        color: 'white', 
                        fontSize: '18px', 
                        textAlign: 'center', 
                        height: '4rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyItems: 'center'
                    }}>
                    <h1 >PH University</h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                <div
                    style={{
                        padding: 24,
                        minHeight: 360,
                    }}
                >
                    <h1>The main content should go here...</h1>
                </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;