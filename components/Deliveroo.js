import React from 'react';
import { StyleSheet, Text, View , ScrollView, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import SearchBar from './SearchBar'




export default class App extends React.Component {

    render() {


        return (
            <View style={styles.topNav}>

    <View style={styles.topNav_top}>
        <View>
            <Text style={styles.topNav_text}>Maintenant</Text>
            <View style={styles.topNav_location}>

                <Text style={styles.topNav_text_bold}>Rue Yves Toudic</Text>
                <View style={{ marginLeft: 5 }}>
                    <Ionicons name="chevron-down-outline" size={20} color="#00CCBC" />
                </View>
            </View>
        </View>
        <View style={styles.topNav_user}>
            <Ionicons name="person-outline" size={20} color="#00CCBC" />
        </View>
    </View>

    <View style={styles.topNav_bot}>
        <View style={styles.bopNav_text_view}>
            <Text style={styles.bopNav_text}>Livraison</Text>
        </View>
        <Text style={styles.bopNav_Second_text}>À emporter</Text>
    </View>

    {/*<View style={{ backgroundColor : 'white', borderColor : 'white' , border : 'none' }}>*/}
    {/*    <SearchBar />*/}
    {/*</View>*/}
    {/*<SearchBar />*/}


    <View style={{ paddingTop: 10 }}>
        <ScrollView
            style={styles.cat_scrollview}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <View style={{ paddingRight: 17, flexDirection: 'row' }}>
                <View style={styles.content_view_offers}>
                    <Image
                        style={styles.content_view_offers_img}
                        source={require("../assets/offers.png")}
                    />
                    <Text style={styles.content_view_offers_txt}>Offres</Text>
                </View>
                <View style={styles.content_view_offers}>
                    <Image
                        style={styles.content_view_offers_img}
                        source={require("../assets/grocery.png")}
                    />
                    <Text style={styles.content_view_offers_txt}>Courses</Text>
                </View>
                <View style={styles.content_view_offers}>
                    <Image
                        style={styles.content_view_offers_img}
                        source={require("../assets/burgers-1.png")}
                    />
                    <Text style={styles.content_view_offers_txt}>Burgers</Text>
                </View>
                <View style={styles.content_view_offers}>
                    <Image
                        style={styles.content_view_offers_img}
                        source={require("../assets/pizza.png")}
                    />
                    <Text style={styles.content_view_offers_txt}>Pizzas</Text>
                </View>
                <View style={styles.content_view_offers}>
                    <Image
                        style={styles.content_view_offers_img}
                        source={require("../assets/sushi-1.png")}
                    />
                    <Text style={styles.content_view_offers_txt}>Sushi</Text>
                </View>
                <View style={styles.content_view_offers}>
                    <Image
                        style={styles.content_view_offers_img}
                        source={require("../assets/poke.png")}
                    />
                    <Text style={styles.content_view_offers_txt}>Poke</Text>
                </View>
            </View>
        </ScrollView>
    </View>

    <View>
        <ScrollView
            style={styles.pub_view}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <View style={{ paddingRight: 17, flexDirection: 'row' }}>
                <Image
                    style={styles.pub_img}
                    source={require("../assets/pub1.jpeg")}
                />
                <Image
                    style={styles.pub_img}
                    source={require("../assets/pub2.jpeg")}
                />
                <Image
                    style={styles.pub_img}
                    source={require("../assets/pub3.jpeg")}
                />
                <Image
                    style={styles.pub_img}
                    source={require("../assets/pub4.jpeg")}
                />
            </View>
        </ScrollView>
    </View>

    <View>

            <Text style={styles.topNav_text_bold}>À la une</Text>
            <View style={styles.topNav_location}>

                <Text style={styles.topNav_text}>Les plats stars du moment !</Text>

            </View>

    </View>

    <View style={styles.restau_scrollView}>

        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <View style={{ paddingRight: 2, flexDirection: 'row', }}>
                <View style={styles.restau_view}>
                    <View style={styles.restau_view_top}>
                        <Image
                            style={styles.restau_view_img}
                            source={require("../assets/header-image.jpeg")}
                        />
                        <View style={styles.restau_view_time}>
                            <Text style={styles.restau_view_time_txt}>20 - 35</Text>
                            <Text style={styles.restau_view_time_txt_min}>min</Text>
                        </View>
                    </View>
                    <View style={styles.restau_view_bot}>
                        <Text style={styles.restau_view_name}>Pizza Hut - République</Text>
                        <Text style={styles.restau_view_type}>Italien - Pizzas</Text>
                        <View style={styles.restau_view_note}>
                            <Ionicons name="star" size={15} style={{ marginRight: 5 }} color="#76BF29" />
                            <Text style={styles.restau_view_note_nbr}>4.6 Excellent</Text>
                            <Text style={styles.restau_view_note_txt}>(500+)</Text>
                        </View>
                        <View style={styles.restau_view_note}>
                            <Ionicons name="happy-outline" size={15} style={{ marginRight: 5 }} color="#76BF29" />
                            <Text style={styles.restau_view_note_nbr}>274 personnes ont aimé "Pizzas"</Text>
                        </View>
                        <Text style={styles.restau_view_distance}>à 5.7 km - livraison gratuite</Text>
                    </View>
                </View>

                <View style={styles.restau_view}>
                    <View style={styles.restau_view_top}>
                        <Image
                            style={styles.restau_view_img}
                            source={require("../assets/header-image.jpeg")}
                        />
                        <View style={styles.restau_view_time}>
                            <Text style={styles.restau_view_time_txt}>20 - 35</Text>
                            <Text style={styles.restau_view_time_txt_min}>min</Text>
                        </View>
                    </View>
                    <View style={styles.restau_view_bot}>
                        <Text style={styles.restau_view_name}>Pizza Hut - République</Text>
                        <Text style={styles.restau_view_type}>Italien - Pizzas</Text>
                        <View style={styles.restau_view_note}>
                            <Ionicons name="star" size={15} style={{ marginRight: 5 }} color="#76BF29" />
                            <Text style={styles.restau_view_note_nbr}>4.6 Excellent</Text>
                            <Text style={styles.restau_view_note_txt}>(500+)</Text>
                        </View>
                        <View style={styles.restau_view_note}>
                            <Ionicons name="happy-outline" size={15} style={{ marginRight: 5 }} color="#76BF29" />
                            <Text style={styles.restau_view_note_nbr}>274 personnes ont aimé "Pizzas"</Text>
                        </View>
                        <Text style={styles.restau_view_distance}>à 5.7 km - livraison gratuite</Text>
                    </View>
                </View>
                <View style={styles.restau_view}>
                    <View style={styles.restau_view_top}>
                        <Image
                            style={styles.restau_view_img}
                            source={require("../assets/header-image.jpeg")}
                        />
                        <View style={styles.restau_view_time}>
                            <Text style={styles.restau_view_time_txt}>20 - 35</Text>
                            <Text style={styles.restau_view_time_txt_min}>min</Text>
                        </View>
                    </View>
                    <View style={styles.restau_view_bot}>
                        <Text style={styles.restau_view_name}>Pizza Hut - République</Text>
                        <Text style={styles.restau_view_type}>Italien - Pizzas</Text>
                        <View style={styles.restau_view_note}>
                            <Ionicons name="star" size={15} style={{ marginRight: 5 }} color="#76BF29" />
                            <Text style={styles.restau_view_note_nbr}>4.6 Excellent</Text>
                            <Text style={styles.restau_view_note_txt}>(500+)</Text>
                        </View>
                        <View style={styles.restau_view_note}>
                            <Ionicons name="happy-outline" size={15} style={{ marginRight: 5 }} color="#76BF29" />
                            <Text style={styles.restau_view_note_nbr}>274 personnes ont aimé "Pizzas"</Text>
                        </View>
                        <Text style={styles.restau_view_distance}>à 5.7 km - livraison gratuite</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    </View>

</View>
        );
    }


}







const styles = StyleSheet.create({

    // navigation
    topNav: {
        backgroundColor: '#ffffff',
        flex: 1,
        width: '100%',
        height: 0.2,
        flexDirection: "column",
        paddingLeft: 15,
        paddingTop: 6,
        paddingRight: 15,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowColor: "#000",
        shadowOpacity: 0.10,
        shadowRadius: 4.65,
    },
    topNav_top: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 20,
    },
    topNav_text: {
        fontSize: 15,
        color: 'black'
    },
    topNav_text_bold: {
        fontSize: 16,
        marginTop: 2,
        color: 'black',
        fontWeight: 'bold',
    },
    topNav_user: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,

    },
    topNav_bot: {
        flexDirection: "row",
        marginTop: 15,
        alignItems: 'center',
    },
    // navbar suite
    bopNav_text_view: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 20,
        backgroundColor: '#00CCBC',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    bopNav_text: {
        fontSize: 15,
        color: 'white',
        fontWeight: "bold",
    },
    bopNav_Second_text: {
        fontSize: 15,
        color: '#00CCBC',
    },
    topNav_location: {
        flexDirection: "row",
        alignItems: 'center'
    },

    // searchbar

    input_nav: {
        position: 'absolute',
        backgroundColor: 'white',
        top: 110,
        zIndex: 3,
        elevation: 3,
        padding: 8,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowColor: "#000",
        shadowOpacity: 0.10,
        shadowRadius: 4.65,
    },
    input_nav_input: {
        width: '70%',
        fontSize: 16,
        color: 'black',
    },

    // categorie

    cat_scrollview: {
        // paddingLeft: 20,
        paddingBottom: 20,
    },
    content_view_offers: {
        position: 'relative',
        marginRight: 15,
    },
    content_view_offers_img: {
        width: 90,
        height: 90,
        borderRadius: 5,
    },
    content_view_offers_txt: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        fontWeight: '900',
        color: 'white'
    },

    // big card

    pub_view: {
        paddingBottom: 8,
    },
    pub_img: {
        height: 150,
        width: 300,
        marginRight: 15,
        borderRadius: 6
    },

    // restaurant

    restau_scrollView: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 25,
        marginBottom: 5,
        overflow: 'hidden',
    },
    restau_scrollView_title_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        paddingRight: 10,
        width: '100%',
    },
    restau_scrollView_title: {
        fontWeight: '700',
        fontSize: 17,
    },

    // card restau

    restau_view: {
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginRight: 15
    },
    restau_view_promotion: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 6,
        elevation: 6,
        backgroundColor: "#F74F56",
        color: 'white',
        fontWeight: '700',
        padding: 5
    },
    restau_view_top: {
        position: 'relative',
        marginBottom: 20
    },
    restau_view_img: {
        height: 165,
        width: 280,
        borderRadius: 6
    },
    restau_view_time: {
        position: 'absolute',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        right: 20,
        bottom: -15,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 50,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        zIndex: 30,

        elevation: 30,
        shadowColor: "#000",
        shadowOpacity: 0.10,
        shadowRadius: 4.65,
    },
    restau_view_time_txt: {
        fontWeight: "800"
    },
    restau_view_time_txt_min: {
        fontWeight: "300",
        fontSize: 12,
        color: "#828585"
    },
    restau_view_bot: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    restau_view_name: {
        fontWeight: "800",
        fontSize: 17
    },
    restau_view_type: {
        fontWeight: "300",
        color: "#828585",
        marginTop: 2
    },
    restau_view_note: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2
    },
    restau_view_note_nbr: {
        color: "#76BF29",
        marginRight: 5
    },
    restau_view_note_txt: {
        color: "#828585"
    },
    restau_view_distance: {
        color: "#828585",
        marginLeft: 2,
        marginTop: 2
    }
});