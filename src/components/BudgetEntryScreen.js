import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addEntry } from '../reducers/budgetReducer';

const BudgetEntryScreen = ({ navigation }) => {
  const [itemName, setItemName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');
  const dispatch = useDispatch();

  const saveEntry = () => {
    const entry = {
      itemName,
      plannedAmount,
      actualAmount,
    };
    dispatch(addEntry(entry));
    navigation.navigate('BudgetEntryListing');
  };

  return (
    <View>
      <TextInput
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        placeholder="Planned Amount"
        value={plannedAmount}
        onChangeText={setPlannedAmount}
      />
      <TextInput
        placeholder="Actual Amount"
        value={actualAmount}
        onChangeText={setActualAmount}
      />
      <Button title="Save" onPress={saveEntry} />
    </View>
  );
};

export default BudgetEntryScreen;
