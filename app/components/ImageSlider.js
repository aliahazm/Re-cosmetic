import React from "react";
import {
  ScrollView,
  Dimensions,
  SafeAreaView,
  Image,
  View,
  Text,
} from "react-native";
import colors from "../config/colors";

const { width } = Dimensions.get("window");
const height = (width * 40) / 60;

export default class ImageSlider extends React.Component {
  state = {
    active: 0,
  };

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  };

  render() {
    return (
      <View style={{ width, height}}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          style={{
            width,
            height,
          }}
        >
          {this.props.images.map((images, index) => (
            <Image
              key={index}
              source={{ uri: images }}
              style={{
                width,
                height,
                resizeMode: "cover",
              }}
            />
          ))}
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            bottom: 0,
            alignSelf: "center",
          }}
        >
          {this.props.images.map((i, k) => (
            <Text
              key={k}
              style={
                k == this.state.active
                  ? {
                      color: colors.olive,
                      margin: 3,
                    }
                  : { color: colors.white, margin: 3 }
              }
            >
              ⬤
            </Text>
          ))}
        </View>
      </View>
    );
  }
}
