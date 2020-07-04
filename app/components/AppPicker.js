import React, { useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { THEME } from "../theme";
import defaultStyles from "../styles";
import { AppText } from "./AppText";
import { Screen } from "./Screen";

export function AppPicker({ icon, placeholder, ...otherProps }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handleModalVisible}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons name={icon} size={20} color={THEME.GREY} style={styles.icon} />
          )}
          <AppText style={styles.appText}> {placeholder} </AppText>
          <MaterialCommunityIcons name="chevron-down" size={20} color={THEME.GREY} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={handleModalVisible} />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.LIGHT_GREY,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  appText: {
    flex: 1,
  },
});
