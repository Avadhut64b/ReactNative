import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {
  List,
  ListItem,
  Left,
  Button,
  Icon,
  Body,
  Text,
  Right,
  Switch,
  CheckBox,
  Title,
  Subtitle,
  H1,
  Fab,
  Container,
  Content,
} from 'native-base';

import {connect} from 'react-redux'

import { removeContact} from '../action/list'

// TODO: action to perform in redux

const Home = ({navigation,removeContact, listState}) => {
  // if the length of the season is zero then rendering container with the message
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {listState.length == 0 ? (
        <Container style={styles.emptyContainer}>
          <H1 style={styles.heading}>
            Contact list is empty, start by adding one
          </H1>
        </Container>
      ) : (
        <Content padder>
          <H1 style={styles.heading}>Contacts</H1>
          <List>
            {listState.map((contact) => (
              <ListItem icon key={contact.id} style={styles.listItem} noBorder>
                <Body>
                  <Title style={styles.contactName}>{contact.name}</Title>
                  <Text note> Mobile Number: {contact.number}  </Text>
                </Body>
                <Right>
                  <Button
                    style={styles.actionButton}
                    onPress={() => {
                      console.log(contact.id);
                      removeContact(contact.id);
                    }}
                    danger>
                    <Icon active name="trash" />
                  </Button>
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
      )}

      <Fab
        style={{backgroundColor: '#5067FF'}}
        position="bottomRight"
        onPress={() => navigation.navigate('Add')}>
        <Icon name="add" />
      </Fab>
    </ScrollView>
  );
};

//TODO: redux config

const mapStateToProps = (state) => ({
    listState: state.list
})

const mapDispatchToProps = {
  removeContact: (id) => removeContact(id),

}


//TODO: Redux export
export default connect(mapStateToProps, mapDispatchToProps)(Home);

// empty container style will be work in the loading as well as the empty message screen
const styles = StyleSheet.create({
  emptyContainer: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    color: '#00b7c2',
    marginVertical: 15,
    marginHorizontal: 5,
  },
  actionButton: {
    marginLeft: 5,
  },
  seasonName: {
    color: '#fdcb9e',
    textAlign: 'justify',
  },
  listItem: {
    marginLeft: 0,
    marginBottom: 20,
  },
});
