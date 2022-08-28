import React from 'react'
import { View, Text, Modal, Button, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';

class App extends React.Component {
constructor()
{
  super();
  this.state={
    show:false
  }
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxOne}>
        <FontAwesome.Button name="bars" backgroundColor="#3b5998" onPress={()=>{this.setState({show:true})}}>
        </FontAwesome.Button>
        </View>

       <Text style={styles.boxThree}>RECYCLE-IT</Text>

       <View style={styles.boxFour}>
        <FontAwesome.Button name="question" backgroundColor="#3b5998" onPress={()=>{this.setState({show:true})}}>
        </FontAwesome.Button>
       </View>
       <Modal 
        transparent={true}
        visible={this.state.show}
         >
        <View style={{backgroundColor:"#000000aa",flex:1}}>
          <View style={{backgroundColor:"#ffffff",margin:30, padding:20,borderRadius:20, alignItems: 'center', flex:1}}>
            <Text style={{ fontSize:30}}>How to use</Text>
            <Button title="x" onPress={()=>{this.setState({show:false})}}/>
          </View>
        </View>
        </Modal>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },

  boxOne: {
    flex: 3,
    padding: 10,
    alignSelf: 'flex-start'
  },
 
  boxThree: {
    flex: 18,
    padding: 7,
    alignSelf: 'flex-start',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
    fontFamily: "Cochin",
    color: "#00008B"
  },

  boxFour: {
    flex: 3,
    padding: 10,
    alignSelf: 'flex-start',
  }
});

export default App;
