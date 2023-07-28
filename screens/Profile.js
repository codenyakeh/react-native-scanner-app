import React from 'react';
import { Fontisto, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { View, Text, Image, StyleSheet } from 'react-native';
import profile from '../assets/Mee.jpg';
import { SocialIcon } from 'react-native-elements';



const Profile = () => {
  return (
    <View style={styles.container}>
        <View style={styles.profile}>
            <Image source={profile} style={styles.img} />
            <View style={styles.name}>
                <Text style={{fontSize: 20}}>Pharez Gbetu</Text>
            </View>
        </View>
        <View style={styles.socialmedia}>
            <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="twitter"
                  onPress={() => {
                    alert('hello');
                  }}
                />
            </View>
            <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="linkedin"
                  onPress={() => {
                    alert('hello');
                  }}
                />
            </View> 
        </View>
        <View style={styles.textmargintop}>
           <Text>
             <SimpleLineIcons 
                  name="phone"
                  size={20}
                  color="pink"
              />
                +220 3637160
            </Text>
           <Text>
              <Fontisto
                  name="email"
                  size={20}
                  color="pink"
              />
              pharez@mail.com
            </Text>
            <Text>
              <Ionicons
                  name="md-location-outline"
                  size={20}
                  color="pink"
                />
              Ttown
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
      width: 60,
      height: 60,
      marginTop: 20,
      borderRadius: 100,
      marginLeft: 50,
  },
  profile: {
      flex: 1,
      flexDirection: 'row',
  },
  name: {
      flex: 1,
      flexDirection: 'column',
      marginTop: 30,
      marginLeft: 20
  },
  socialmedia: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: -150,
    marginTop: 0,
  },
  textmargintop: {
    marginBottom: 200,
    marginLeft: -100,
  }
})

export default Profile;