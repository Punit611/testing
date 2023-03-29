import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import NestedListView from 'react-native-nested-listview';

const data = [
  {
    name: 'Category 1',
    children: [
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Item 3' },
    ],
  },
  {
    name: 'Category 2',
    children: [
      { name: 'Item 4' },
      { name: 'Item 5' },
    ],
  },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const [openedSections, setOpenedSections] = useState([]);

  const renderRow = ({ item }) => (
    <View style={{ marginLeft: 20 }}>
      <Text>{item.name}</Text>
    </View>
  );

  const renderSectionHeader = ({ section }) => (
    <View style={{ backgroundColor: '#f0f0f0', padding: 10 }}>
      <Text>{section.name}</Text>
    </View>
  );

  const filterData = (data, searchTerm) => {
    const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return filteredData.map(item => ({ ...item, children: filterData(item.children, searchTerm) }));
  };

  const filteredData = filterData(data, searchTerm);

  const onSectionToggle = section => {
    const index = openedSections.indexOf(section);
    if (index > -1) {
      setOpenedSections([...openedSections.slice(0, index), ...openedSections.slice(index + 1)]);
    } else {
      setOpenedSections([...openedSections, section]);
    }
  };

  const isSectionOpen = section => openedSections.includes(section);

  return (
    <View style={{ flex: 1 }}>
      {/* <TextInput
        style={{ height: 40, margin: 10, padding: 10, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Search"
        onChangeText={text => setSearchTerm(text)}
        value={searchTerm}
      /> */}
      {/* <NestedListView
        data={filteredData}
        getChildrenName={() => 'children'}
        renderRow={renderRow}
        renderSectionHeader={renderSectionHeader}
        onSectionToggle={onSectionToggle}
        isSectionOpen={isSectionOpen}
      /> */}
    </View>
  );
}



/*
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';

export default function App() {
  return (
    <View style={styles.title}>
    
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop:"12%",
    justifyContent: "flex-start",
    alignItems: "top",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    margin: "10%",
  }
  
});

*/