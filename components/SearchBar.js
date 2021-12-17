import React from 'react';

import { SearchBar } from 'react-native-elements';
import {StyleSheet} from "react-native";

export default class App extends React.Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <SearchBar style={styles.input_nav}
                placeholder="Plats, restaurants..."
                onChangeText={this.updateSearch}
                value={search}
                       lightTheme={true}
                       // containerStyle={{ color : 'red' ,}}
            />
        );
    }


}
const styles = StyleSheet.create({
    input_nav: {
        //
        paddingTop: 5,
        backgroundColor : 'white',
        borderColor : 'white',
    },

})