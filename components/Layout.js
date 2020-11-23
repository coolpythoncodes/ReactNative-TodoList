import React from 'react';
import { StatusBar, View } from 'react-native';
import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';

const Layout = ({ secondary,children,style }) => {
    return (
        <View style={{...style}}>
            <StatusBar
                backgroundColor='#6074F9'
                barStyle='light-content'
            />
            <HeaderBar />
            {children}
            <View style={{backgroundColor: '#f4f4f4',flex: 0.12,}}>
                <FooterBar />
            </View>
        </View>
    );
}

export default Layout;
