import {View, Text, StyleSheet, Image} from "react-native"

const BannerItem = ({movie, index}) =>{

    const imageBaseUrl = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;


    return (
        <View style= {styles.container}>
            <Image  source={{uri: imageBaseUrl}}  style ={[styles.image, index === 0 ? {marginLeft: 15} : {marginLeft: 18}]} />
            <Text style= {[styles.title, index === 0 ? {marginLeft: 15} : {marginLeft: 18}]}>{movie.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
 
    container: {
     marginTop: 15
    },  
    image: {
        width: 190,
        height: 250,
        borderRadius: 10,
        marginLeft: 10,
        
    },
    title: {
     fontWeight: "bold",
     
    }
})

export default BannerItem;