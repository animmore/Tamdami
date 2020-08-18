import React, { useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { THEME } from "../theme";
import defaultStyles from "../styles";
import { AppText } from "./AppText";
import { Screen } from "./Screen";
import { PickerItem } from "./PickerItem";

export function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {
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

          {selectedItem ? (
            <AppText style={styles.appText}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons name="chevron-down" size={20} color={THEME.GREY} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={handleModalVisible} />
          <FlatList
            data={items}
            keyExtractor={(item) => `${item.value}`}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  handleModalVisible();
                  onSelectItem(item);
                }}
              />
            )}
          />
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
  placeholder: {
    color: THEME.GREY,
    flex: 1,
    fontSize: 18,
  },
});
