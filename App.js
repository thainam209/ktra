import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text style={styles.greeting}>Hello 👋🏻</Text>
                    <Text style={styles.username}>Christie Doe</Text>
                </View>
                <Image source={require('./assets/avatar.png')} style={styles.profileImage} />
            </View>
            <Text style={styles.insightsTitle}>Your Insights</Text>

            <View style={styles.row}>
                <Card title="Scan new" value="Scanned 483" image={require('./assets/icon_scannew.png')} />
                <Card title="Counterfeits" value="Counterfeited 32" image={require('./assets/icon_couter.png')} />
            </View>
            <View style={styles.row}>
                <Card title="Success" value="Checkouts 8" image={require('./assets/icon_success.png')} />
                <Card title="Directory" value="History 26" image={require('./assets/icon_Directory.png')} />
            </View>
            <View style={styles.exploreMore}>
                <TouchableOpacity>
                    <Text style={styles.exploreText}>Explore More</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const thongbao = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.greeting}>Notifications</Text>
      </View>
  );
};

const ScanScreen = () => {
    return (
      <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://example.com/juice-image.jpg' }} // Thay thế bằng URL hình ảnh thực tế của chai nước trái cây
          style={styles.image}
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Laurens's Orange Juice</Text>
        <Text style={styles.description}>100% Organic</Text>
        <Text style={styles.volume}>1L</Text>
      </View>
    </View>
    );
};

const dongho = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.greeting}>lịch sử</Text>
      </View>
  );
};

const giohang = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.greeting}>giỏ hàng</Text>
      </View>
  );
};

const Card = ({ title, value, image }) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardValue}>{value}</Text>
        </View>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        position: 'absolute',
                        left: 20,
                        right: 20,
                        elevation: 0,
                        backgroundColor: '#ffffff',
                        borderRadius: 30,
                        height: 70,
                        shadowColor: '#7F5DF0',
                        shadowOffset: {
                            width: 0,
                            height: 10,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.5,
                        elevation: 5,
                    },
                    tabBarShowLabel: false,
                }}
            >
                <Tab.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./assets/icon_home.png')} style={{ width: size, height: size, tintColor: color }} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="thongbao" 
                    component={thongbao} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./assets/icon_thongbao.png')} style={{ width: size, height: size, tintColor: color }} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="Scan" 
                    component={ScanScreen} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./assets/icon_scan.png')} style={{ width: size, height: size, tintColor: color }} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="dongho" 
                    component={dongho} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./assets/icon_dongho.png')} style={{ width: size, height: size, tintColor: color }} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="giohang" 
                    component={giohang} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./assets/icon_giohang.png')} style={{ width: size, height: size, tintColor: color }} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    headerText: {
        flexDirection: 'column',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    greeting: {
        fontSize: 24,
        margin: 0,
    },
    username: {
        fontSize: 16,
        color: '#666',
    },
    insightsTitle: {
        fontSize: 20,
        color: '#333',
        marginLeft: 20,
        paddingBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        width: 158,
        height: 176,
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 30,
        margin: 10,
        width: '45%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        alignItems: 'center',
    },
    cardImage: {
        width: 55,
        height: 55,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 18,
        marginBottom: 5,
    },
    cardValue: {
        fontSize: 16,
    },
    exploreMore: {
        alignItems: 'center',
        marginTop: 20,
    },
    exploreText: {
        color: '#007bff',
        fontSize: 16,
    },
    screencontainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5', // Màu nền
    },
    imageContainer: {
      borderWidth: 2,
      borderColor: '#ccc',
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom: 20,
    },
    image: {
      width: 200, // Kích thước hình ảnh
      height: 300,
    },
    labelContainer: {
      alignItems: 'center',
    },
    label: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 16,
      color: '#888',
    },
    volume: {
      fontSize: 16,
    },
});

export default App;