// import libraries for making a componenet
import React from 'react';
import { Text } from 'react-native';


// make a component
const Header = () => {
    const { textStyle } = styles;

    return <Text style={textStyle}>Albums!</Text>;
};
const styles = {
    textStyle: {
        fontSize: 50
    }
}

// make the component available to other parts of the app
export default Header;
