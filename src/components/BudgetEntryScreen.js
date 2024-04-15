import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addEntry } from '../reducers/budgetReducer';
import { MainContainer, StyledTextInput } from './StyledComponents';

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
    <MainContainer>
      <StyledTextInput
        style={[styles.textInput]}
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
      />
      <StyledTextInput
        style={[styles.textInput]}
        placeholder="Planned Amount"
        value={plannedAmount}
        onChangeText={setPlannedAmount}
      />
      <StyledTextInput
        style={[styles.textInput]}
        placeholder="Actual Amount"
        value={actualAmount}
        onChangeText={setActualAmount}
      />
      <Button title="Save" onPress={saveEntry} />
    </MainContainer>
  );
};

export default BudgetEntryScreen;

const styles = StyleSheet.create({
  textInput:{
    padding:10,
  }
});