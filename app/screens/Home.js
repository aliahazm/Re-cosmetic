import React from "react";
import {
  ScrollView,
  Dimensions,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
} from "react-native";
import ImageSlider from "../components/ImageSlider";
import colors from "../config/colors";

const images = [
  "https://freedesignfile.com/upload/2019/03/Rose-with-cosmetics-advertisement-poster-template-vectors-02.jpg",
  "https://freedesignfile.com/upload/2018/11/Honey-humectants-cosmetics-poster-template-vector-03.jpg",
  "https://image.shutterstock.com/image-vector/beauty-make-banner-template-cosmetic-600w-1927734332.jpg"
];

const { width } = Dimensions.get("window");
const height = (width * 60) / 60;

function Home({ navigation }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.creme,
        flex: 1,
      }}
    >
      {/* Content */}
      <ScrollView
      style={{
        backgroundColor: colors.creme,
        flex: 1,
      }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingTop: 50,
            paddingBottom: 50,
            
          }}
        >
          <Image
            source={require("../assets/profile.jpg")}
            style={{
              height: 110,
              width: 110,
              borderRadius: 90,
              borderWidth: 0.5,
              borderColor: colors.olive,
              marginLeft: 30,
            }}
          />

          <View style={{ marginLeft: 20 }}>
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "500",
                padding: 5,
                fontSize: 30,
                color: "#6A7D5A",
              }}
            >
              ━━━━━━━━
            </Text>
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "600",
                padding: 5,
                fontSize: 25,
                color: "#6A7D5A",
                fontFamily: "Times New Roman",
              }}
            >
              HELLO, BEAUTIFUL!
            </Text>

            <Text
              style={{
                alignSelf: "center",
                fontWeight: "500",
                padding: 5,
                fontSize: 30,
                color: "#6A7D5A",
              }}
            >
              ━━━━━━━━
            </Text>
          </View>
        </View>

        <ImageSlider images={images} />

        <ScrollView>
          <Text
            style={{
              fontSize: 20,
              padding: 20,
              marginTop: 30,
              alignSelf: "center",
              fontFamily: "Times New Roman",
              color: colors.olive,
            }}
          >
            UPCOMING EVENTS
          </Text>

          <Image
            source={require("../assets/event2.jpg")}
            style={{ height, width }}
          />
          <Image
            source={require("../assets/event1.jpg")}
            style={{ height: 300, width }}
          />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
