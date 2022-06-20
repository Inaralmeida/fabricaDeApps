import React, {useState} from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={S.container}>
      <Button title="Clique aqui" onPress={() => setIsVisible(prev => !prev)} />
      {isVisible && (
        <>
          <Text style={S.textStyle}> S2 EU TE AMO PRINCESA S2</Text>
          <IMG />
        </>
      )}
    </View>
  );
};

export default App;

const IMG = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://scontent-gru1-1.cdninstagram.com/v/t51.2885-15/261743776_957067301547646_6355990982850026690_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-gru1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=S_o727NjdH4AX_ZvANS&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjcxODM2NjEzNDQzODk4MTMxOQ%3D%3D.2-ccb7-5&oh=00_AT-x2m654J82BKUD9dkbC_BUC6dKCzi2YmkMHfWkVX7uRw&oe=62B70BA9&_nc_sid=30a2ef',
        }}
        style={S.img}
      />
    </View>
  );
};

const S = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirectionx: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'black',
  },
  textStyle: {
    color: '#ffb200',
    backgroundColor: 'black',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },

  img: {
    width: 300,
    height: 300,
    borderRadius: 10,
    borderColor: '#f2f2f2',
    borderWidth: 5,
  },
});
