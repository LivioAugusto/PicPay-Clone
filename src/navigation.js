import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import PayButtom from './components/PayButtom';

import Home from './screens/home';
import Wallet from './screens/wallet';
import Pay from './screens/pay';

const Tab = createBottomTabNavigator();
const Icons = {
    Home:{
        lib: AntDesign,
        name:'home',
    },
    Wallet:{
        lib: AntDesign,
        name:'creditcard',
    },
    Notifications:{
        lib: Ionicons,
        name:'ios-notifications-outline',
    },
    Settings:{
        lib: AntDesign,
        name:'setting',
    },
}

export default function Navigation(){
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({color, size}) => {
                    if(route.name == 'Pay'){
                        return <PayButtom />;
                    }
                    const {lib: Icon, name} = Icons[route.name];
                    return <Icon name={name} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                style: {
                  backgroundColor: '#131418',
                  borderTopColor: 'rgba(255,255,255,0.2)',
                },
      
                activeTintColor: '#fff',
                inactiveTintColor: '#92929c',
              }}
            >

            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                title: 'Início',
            }}
            />
            <Tab.Screen 
                name="Wallet" 
                component={Wallet} 
                options={{
                    title: 'Carteira',
                }}    
            />
            <Tab.Screen 
                name="Pay" 
                component={Pay} 
                options={{
                    title: '',
                }}
            />

            <Tab.Screen 
                name="Notifications" 
                component={Pay} 
                options={{
                    title: 'Notificações',
                }}
            />

            <Tab.Screen 
                name="Settings" 
                component={Pay} 
                options={{
                    title: 'Ajustes',
                }}
            />
        </Tab.Navigator>
    );
}