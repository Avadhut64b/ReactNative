import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Button,
  H1,
} from 'native-base';



import shortid from 'shortid';
import {addContact} from '../action/list'
import {connect} from 'react-redux'

const Add = ({navigation, addContact}) => {
  // to hold name of the season and total no of the season
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // to add the current season into list and then move to the home screen
  const handleSubmit = async () => {
    try {
        if (!name || !number) {
            return alert('Please add both fields')
        }

        const contactToAdd = {
            id: shortid.generate(),
            name,
            number
        }

        addContact(contactToAdd)

        navigation.navigate("Home")

    } catch (error) {
        console.log(error)
    }
  };
  return (
    <Container style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <H1 style={styles.heading}>Add Contact</H1>

        <Form>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="Name"
              value={name}
              style={{color: '#eee'}}
              onChangeText={(text) => setName(text)}
            />
          </Item>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="Mobile Number"
              value={number}
              style={{color: '#eee'}}
              onChangeText={(text) => setNumber(text)}
            />
          </Item>
          <Button rounded block onPress={handleSubmit}>
            <Text>Add</Text>
          </Button>
        </Form>
      </ScrollView>
    </Container>
  );
};

//TODO: Redux config

const mapDispatchToProps = {
    addContact: (data) => addContact(data)
}



//TODO: Redux Export
export default connect(null, mapDispatchToProps )(Add);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    textAlign: 'center',
    color: '#00b7c2',
    marginHorizontal: 5,
    marginTop: 50,
    marginBottom: 20,
  },
  formItem: {
    marginBottom: 20,
  },
});
