import React from "react";
import {
  Alert,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import routes from "../navigation/routes";
import colors from "../config/colors";
import AppText from "../components/AppText";
import RedeemButton from "../components/RedeemButton";
function AllRewards({ navigation }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.creme,
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: colors.creme,
          flex: 0.075,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View style={styles.allRewardsButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.ALL_REWARDS)}
          >
            <Text style={styles.allRewardsButtonTitle}>ALL REWARDS</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.myRewardsButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.MY_REWARDS)}
          >
            <Text style={styles.myRewardsButtonTitle}>MY REWARDS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          backgroundColor: colors.creme,
          flex: 0.003,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: colors.grey,
            flex: 1,
          }}
        ></View>

        <View
          style={{
            backgroundColor: colors.pink,
            flex: 1,
          }}
        ></View>
      </View>

      <View
        style={{
          backgroundColor: colors.pink,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: colors.white,
            flex: 0.55,
            flexDirection: "row",
            justifyContent: "center",
            marginHorizontal: 25,
            marginTop: 25,
          }}
        >
          <View
            style={{
              flex: 0.4,
              borderRightColor: colors.olive,
              borderRightWidth: 0.5,
            }}
          >
            <Image style={styles.logo} source={require("../assets/Logo.png")} />
          </View>

          <View
            style={{
              flex: 0.6,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AppText
              style={{
                fontWeight: "bold",
                color: colors.olive,
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
              }}
            >
              RC Voucher 15% Off,
            </AppText>
            <AppText
              style={{
                fontWeight: "bold",
                color: colors.olive,
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                paddingBottom: 35,
              }}
            >
              No minimum spend
            </AppText>
            <RedeemButton
              title="Redeem"
              onPress={() =>
                Alert.alert(
                  "Redeem Successful!",
                  "Voucher has been credited into MY REWARDS"
                )
              }
            ></RedeemButton>

            <AppText style={{ color: colors.grey, fontSize: 11 }}>
              Points to be deducted: 40 RC Points
            </AppText>
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.white,
            flex: 0.55,
            flexDirection: "row",
            justifyContent: "center",
            marginHorizontal: 25,
            marginTop: 10,
          }}
        >
          <View
            style={{
              flex: 0.4,
              borderRightColor: colors.olive,
              borderRightWidth: 0.5,
            }}
          >
            <Image style={styles.logo} source={require("../assets/Logo.png")} />
          </View>

          <View
            style={{
              flex: 0.6,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AppText
              style={{
                fontWeight: "bold",
                color: colors.olive,
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
              }}
            >
              RC Voucher 30% Off,
            </AppText>
            <AppText
              style={{
                fontWeight: "bold",
                color: colors.olive,
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                paddingBottom: 35,
              }}
            >
              No minimum spend
            </AppText>
            <RedeemButton
              title="Redeem"
              onPress={() =>
                Alert.alert(
                  "Voucher Redeemed Successfully!",
                  "Check 'MY REWARDS' to use now"
                )
              }
            ></RedeemButton>
            <AppText style={{ color: colors.grey, fontSize: 11 }}>
              Points to be deducted: 80 RC Points
            </AppText>
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.white,
            flex: 0.55,
            flexDirection: "row",
            justifyContent: "center",
            marginHorizontal: 25,
            marginTop: 10,
            marginBottom: 25,
          }}
        >
          <View
            style={{
              flex: 0.4,
              borderRightColor: colors.olive,
              borderRightWidth: 0.5,
            }}
          >
            <Image style={styles.logo} source={require("../assets/Logo.png")} />
          </View>

          <View
            style={{
              flex: 0.6,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AppText
              style={{
                fontWeight: "bold",
                color: colors.olive,
                marginTop: -10,
                fontSize: 18,
                paddingTop: 15,
              }}
            >
              RC Voucher 50% Off,
            </AppText>
            <AppText
              style={{
                fontWeight: "bold",
                color: colors.olive,
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                paddingBottom: 35,
              }}
            >
              No minimum spend
            </AppText>
            <RedeemButton
              title="Redeem"
              onPress={() =>
                Alert.alert(
                  "Voucher Redeemed Successfully!",
                  "Check 'MY REWARDS' to use now"
                )
              }
            ></RedeemButton>
            <AppText style={{ color: colors.grey, fontSize: 11 }}>
              Points to be deducted: 100 RC Points
            </AppText>
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.pink,
            flex: 0.29,
            flexDirection: "row",
            justifyContent: "center",
            marginHorizontal: 25,
            marginTop: 10,
            marginBottom: 25,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.creme,
    flex: 1,
  },

  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.olive,
    marginVertical: 20,
  },

  previousPage: {
    backgroundColor: colors.creme,
    flex: 0.5,
    left: 25,
  },

  menu: {
    backgroundColor: colors.creme,
    flex: 0.5,
    right: -50,
  },

  content: {
    color: colors.grey,
    fontSize: 14,
    fontWeight: "bold",
    marginHorizontal: 25,
    marginVertical: 0,
    justifyContent: "center",
    textAlign: "justify",
    lineHeight: 19,
  },

  title: {
    color: colors.grey,
    fontSize: 14,
    fontWeight: "bold",
    marginHorizontal: 25,
    marginVertical: 10,
    justifyContent: "center",
    textAlign: "justify",
  },

  RCPoints: {
    color: colors.grey,
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 25,
    marginVertical: -19,
    justifyContent: "center",
    textAlign: "justify",
  },

  earn: {
    color: colors.grey,
    fontSize: 16,

    marginHorizontal: 103,
    marginVertical: 0,
    justifyContent: "center",
    textAlign: "justify",
  },

  allRewardsButton: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  myRewardsButton: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  allRewardsButtonTitle: {
    color: "#6a7d5a",
    fontWeight: "600",
    fontSize: 18,
  },

  myRewardsButtonTitle: {
    color: "#707070",
    fontSize: 18,
  },

  logo: {
    marginTop: 7,
    marginRight: 20,
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default AllRewards;
