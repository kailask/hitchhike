import { StyleSheet } from 'react-native'
const myRides = StyleSheet.create({   
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
      },
      title: {
        fontSize: 30,
        textAlign: 'center',
        padding: 20,
        marginTop: 20,
        color: '#ff8700',
      },
      rideCard: {
        padding: 20,
        margin: 10,
        marginTop: 0,
        alignSelf: 'stretch',
        shadowRadius: 5
      },
      cardRow: {
        flexDirection: "row",
        justifyContent: "center",
	  }
	})
	  
const login_signup = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputBox: {
    width: '80%',
    backgroundColor: '#eeeeee',
    color: '#002f6c',
    textAlign: 'center',
    margin: 10,
  },

  button: {
    width: 300,
    backgroundColor: '#ff8700',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },  

    containerTwo: {
        // flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'white',
        color: 'black',
        padding: 40,
        fontSize: 30
    },

    // inputBox: {
    //     width: 200,
    //     height: 30,
    //     backgroundColor: '#eeeeee',
    //     borderRadius: 25,
    //     paddingHorizontal: 16,
    //     fontSize: 16,
    //     color: '#002f6c',
    //     marginVertical: 10,
    // },


    button1: {
        width: 300,
        backgroundColor: '#fffdd0',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },

    buttonText1: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ff8700',
        textAlign: 'center'
    },



    //   container: {
    //     backgroundColor: 'white',
    //     color: 'black',
    //     padding: 10,
    //     fontSize: 30,
    //     borderColor: 'black',
    //     borderWidth: 2,
    //   },
      displayText: {
        // Setting up Hint Align center.
        textAlign: 'center',
        height: 25,
        backgroundColor: '#FFFFFF',
        fontSize: 20,
      },
      displayText1: {
        // Setting up Hint Align center.
        textAlign: 'center',
        height: 35,
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF',
        //textDecorationLine: 'underline',
        fontSize: 27,
      },

      // button: {
      //   // width: 100, backgroundColor: '#ff8700', borderRadius: 25, marginVertical: 10,
      //   // paddingVertical: 12, justifyContent: 'center', alignItems: 'center'
      //   // textAlign: 'center',
      //   height: 35,
      //   borderWidth: 2,
      //   borderColor: '#ff8700',
      //   borderRadius: 20,
      //   backgroundColor: '#ff8700',
      // },
      // buttonText: {
      //   fontSize: 25,
      //   fontWeight: '500',
      //   color: '#FFFFFF',
      //   textAlign: 'center',
      // },

  })

  export {myRides, login_signup}
   