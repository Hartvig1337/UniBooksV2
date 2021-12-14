import * as React from 'react';
import {View, FlatList, TouchableOpacity, StyleSheet, ScrollView, Alert} from 'react-native';
import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import {useEffect, useState} from "react";

import {Button, Text, Input, Modal, Card} from '@ui-kitten/components';


const AddBook = ({}) => {
    
    //Create reference for clearing inputs
    const titleInput = React.useRef();
    const writerInput = React.useRef();
    const yearInput = React.useRef();
    const priceInput = React.useRef();
    const ownerInput = React.useRef();

    //Book inputState
    const useInputState = (initialValue = '') => {
        const [value, setValue] = React.useState(initialValue);
        return { value, onChangeText: setValue };
      };
    
    //Success modal
    const [visible, setVisible] = React.useState(false);

    
    const Title = useInputState();
    const Writer = useInputState();
    const Year = useInputState();
    const Price = useInputState();
    const Owner = useInputState();

    function pushBook(){

        //Ensures that all inputs are filled out.
        if(Title.value.length === 0 || Writer.value.length === 0 || Year.value.length === 0 || Price.value.length === 0 || Owner.value.length === 0 ){
            return Alert.alert('Please fill out all the fields!');
        } else {
            const newBook = firebase.database().ref('/Books').push();
            newBook.set({
                Title: Title.value,
                Writer: Writer.value,
                Year: Year.value,
                Price: Price.value,
                Owner: Owner.value
            })
            titleInput.current.clear();
            writerInput.current.clear();
            yearInput.current.clear();
            priceInput.current.clear();
            ownerInput.current.clear();
            //Reveal modal
            setVisible(true);
        }
    }
    
    return ( 
        //Lets the user tab out of the numeric keyboard
        <ScrollView keyboardShouldPersistTaps='handled'>

        <Input style={style.bookForm}
        ref={titleInput}
        label='Book title'
        placeholder='Title of the book'
        value={Title}
        {...Title}
      />
        <Input style={style.bookForm}
        ref={writerInput}
        label='Writer'
        placeholder='Writer'
        value={Writer}
        {...Writer}
      />
        <Input style={style.bookForm}
        ref={yearInput}
        label='Year'
        placeholder='Year'
        value={Year}
        {...Year}
      />
        <Input style={style.bookForm} keyboardType='numeric'
        ref={priceInput}
        label='Price'
        placeholder='Price'
        value={Price}
        {...Price}
      />
        <Input style={style.bookForm}
        ref={ownerInput}
        label='Please input your e-mail addres'
        placeholder='Owner'
        value={Owner}
        {...Owner}
      />
      <Button onPress={()=>pushBook()} style={style.button}>Upload book</Button>

      <Modal //Pop-up when a book is succesfully created
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Text>Book successfully uploaded!</Text>
          <Button onPress={() => setVisible(false)} style={style.modal}>
            Close
          </Button>
        </Card>
      </Modal>

      </ScrollView>
    )
}

export default AddBook;

const style = StyleSheet.create({
    bookForm: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    button: {
        marginTop: 20,
        marginLeft: 90,
        marginRight: 90,
    },
    modal: {
        alignContent: 'center',
        marginTop: 8
    }
  })
  const styles = StyleSheet.create({
    container: {
      minHeight: 192,
    },
    backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  });