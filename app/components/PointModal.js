import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import Modal from "react-native-modal";
import colors from "../config/colors";
import AppText from "./AppText";
import Icon from "./Icon";
export default class PointModal extends Component {
  state = {
    visibleModal: null,
  };

  renderButton = (text, onPress) => (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <AppText
          style={{
            color: colors.pink,
            fontSize: 18,
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          {text}
        </AppText>
      </View>
    </TouchableWithoutFeedback>
  );

  confirmButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.submitButton}>
        <AppText
          style={{
            color: colors.white,
            fontSize: 18,
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          {text}
        </AppText>
      </View>
    </TouchableOpacity>
  );

  renderModalContent = () => (
    <View style={styles.modalBox}>
      <View style={styles.modalContent}>
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity>
            <Icon
              name="information-outline"
              size={45}
              backgroundColor="#fff"
              iconColor="#707070"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "row",
          }}
        >
          <AppText
            style={{ color: colors.grey, marginTop: 10, fontWeight: "bold" }}
          >
            RC Points{" "}
          </AppText>

          <AppText style={{ color: colors.grey, marginTop: 10 }}>
            (to be earned)
          </AppText>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <AppText
            style={{ color: colors.olive, marginTop: 10, fontWeight: "bold" }}
          >
            + 20 points
          </AppText>
        </View>
      </View>

      <View>
        {this.confirmButton("Confirm", () =>
          this.setState({ visibleModal: null })
        )}
      </View>
    </View>
  );

  render() {
    return (
      <View>
        {this.renderButton("SUBMIT", () => this.setState({ visibleModal: 5 }))}

        <Modal
          isVisible={this.state.visibleModal === 5}
          style={styles.bottomModal}
        >
          {this.renderModalContent()}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  button: {
    backgroundColor: colors.pink,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },

  submitButton: {
    backgroundColor: colors.olive,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginBottom: 35,
  },

  modalBox: {
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },

  modalContent: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 20,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
});
