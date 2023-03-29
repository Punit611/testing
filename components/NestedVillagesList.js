// List.js
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import NestedListView, {NestedRow} from 'react-native-nested-listview';

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.details}>{details}</Text>
  </View>
);

/*


*/


// the filter
const NestedVillagesList = ({ searchPhrase, nestedVillageData, setCLicked }) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <Item name={item.name} details={item.details} />;
    }
    // filter of the name
    if (item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.details} />;
    }
    // filter of the description
    if (item.details.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.details} />;
    }
  };

  const renderVillage = (node, level, isLastLevel) => {

    console.log(node.title,level);
    return node.title.startsWith(searchPhrase) ?
    (
      <NestedRow
        level={level}
        style={{ borderColor: 'black', borderWidth: 1 }}
      >
        <Text>{node.title}</Text>
      </NestedRow>
    ) : null
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}
      >
        <NestedListView 
          keepOpenedState={true}
          data={nestedVillageData}
          getChildrenName={(node) => 'items'}
          // onNodePressed={(node) => alert('Selected node' + node.title)}
          renderNode={renderVillage}
        />
        {/* <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default NestedVillagesList;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});
