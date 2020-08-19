import React from "react";
import { StyleSheet, Text } from "react-native";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import { Screen } from "../components/Screen";
import { CategoryPickerItem } from "../components/CategoryPickerItem";

const validationScheme = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Camera",
    value: 3,
  },
  {
    label: "Games",
    value: 4,
  },
  {
    label: "Movies & Music",
    value: 5,
  },
  {
    label: "Books",
    value: 6,
  },
  {
    label: "Cars",
    value: 7,
  },
  {
    label: "Sports",
    value: 8,
  },
  {
    label: "Other",
    value: 9,
  },
];

export function ListingEditScreen() {
  const fields = (
    <>
      <AppFormField maxLength={255} name="title" placeholder="Title" />
      <AppFormField
        keyboardType="numeric"
        maxLength={8}
        name="price"
        placeholder="Price"
        width={120}
      />
      <AppFormPicker
        items={categories}
        name="category"
        numberOfColumns={3}
        PickerItemComponent={CategoryPickerItem}
        placeholder="Category"
        width="50%"
      />
      <AppFormField
        maxLength={255}
        multiline
        name="description"
        numberOfLines={3}
        placeholder="Description"
      />
      <SubmitButton title="Post" />
    </>
  );

  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationScheme}
        childrem={fields}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
