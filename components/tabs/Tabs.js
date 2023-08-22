import * as React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

// const FirstRoute = () => {
//   return (
//     <View
//       style={{
//         backgroundColor: '#000',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height:200
//       }}>
//       <Text>Hello</Text>
//     </View>
//   );
// };

// const SecondRoute = () => (
//   <View style={{flex: 1, backgroundColor: '#673ab7'}} />
// );
// const ThirdRoute = () => (
//   <View style={{height: 200, backgroundColor: '#ff4081'}} />
// );

// const FourthRoute = () => (
//   <View style={{flex: 1, backgroundColor: '#673ab7'}} />
// );
// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
//   third: ThirdRoute,
//   fourth: FourthRoute,
// });

export default function Tabs({
  FirstRoute,
  SecondRoute,
  ThirdRoute,
  FourthRoute,
}) {
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
  });
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: '0:00-5:45'},
    {key: 'second', title: '6:00-11:45'},
    {key: 'third', title: '12:00-17:45'},
    {key: 'fourth', title: '18:00-23:45'},
  ]);

  //   const tabBarStyle = { fontSize: 8 }; // Adjust the font size as needed

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={props => (
        <TabBar
          {...props}
          style={{backgroundColor: 'transparent'}}
          labelStyle={{
            fontSize: 10,
            color: '#000',
            fontWeight: '700',
          }}
          activeColor="#0f3995"
          indicatorStyle={{backgroundColor: '#0f3995', height: 5}}
        />
      )}
    />
  );
}
