import * as React from 'react';
import {View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import {useEffect, useState} from "react";
import { getDatabase, ref, child, get, database} from "firebase/database";


import {List, ListItem, Icon, Button, Text, Spinner, Modal, Card, typeSelected} from '@ui-kitten/components';

const BookView = ({}) => {
    
    //Reserve handling
    const [visible, setVisible] = React.useState(false); //SKIFT TIL FALSE

    //Reserve function
    function Reserve(){
      
      //Reaveal Modal
      setVisible(true)
      /*
      let count = null;
      const dbRef = ref(getDatabase());
      function getBooks() {
        try {
          get(child(dbRef, `ReserveCounter`)).then((snapshot) => {
            if (snapshot.exists()) {
              let count = snapshot.val().Counter + 1 
              d
            }
          })
        } catch(error) {
          console.log('error occured.')
        }
      }
      getBooks();
      */
    }

    //Icon and button for ListItems
      const BookIcon = (props) => (
        <Icon {...props} name='book-outline'/>
      );
      const ReserveButton = (props) => (
        <Button 
          size='tiny'
      onPress={() => Reserve()} style={style.modal}
          >Reserve</Button>
      );
      const LoadingIndicator = (props) => (
        <View style={[props.style, styles.indicator]}>
          <Spinner size='small'/>
        </View>
      );

    const [books,setBooks] = useState()
    
    useEffect(() => {
        if(!books) {
            firebase
                .database()
                .ref('/Books')
                .on('value', snapshot => {
                        setBooks(snapshot.val())
                });
        }
    },[]);

    // Show loading icon when loading books or if no books are found in the database
    if (!books) {
        return ( 
        <Button style={styles.button} appearance='outline' accessoryLeft={LoadingIndicator}>
        Loading books...
      </Button> )
    }

//Initialize array from Objects collected from Firebase
const bookArray = Object.values(books);

const renderBook = ( {item} ) => (
    <ListItem
      title={`${item.Title} ${item.Year}`}
      description={`Price: ${item.Price}USD pr. Semester`}
      accessoryLeft={BookIcon}
      accessoryRight={ReserveButton}
    />
  );

  return (
    <>
    <List
    data={bookArray}
    renderItem={renderBook}
  />
        <Modal //Pop-up when a book is succesfully created
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(true)}>
        <Card disabled={true}>
          <Text>Book reserved!</Text>
          <Button onPress={() => setVisible(false)} style={style.modal}>
            Close
          </Button>
        </Card>
      </Modal>
    </>)
}

export default BookView;

const style = StyleSheet.create({
  loading: {
      marginTop: 200,
      textAlign: 'center'
  },
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
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    margin: 80,
    marginTop: 250
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});