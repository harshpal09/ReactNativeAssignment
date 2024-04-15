import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const BudgetEntryListingScreen = () => {
  const entries = useSelector((state) => state.budget.entries);

  return (
    <View>
      <Text>Budget Entry Listing</Text>
      <FlatList
        data={entries}
        renderItem={({ item }) => (
          <View>
            <Text>{item.itemName}</Text>
          </View>
        )}
        keyExtractor={(item) => item.itemName}
      />
    </View>
  );
};

export default BudgetEntryListingScreen;
