import {
    widthPercentageToDP as wp2dp,
    heightPercentageToDP as hp2dp,
  } from 'react-native-responsive-screen';
  const wireframeScreenHeight = 812 //height de las screens en figma
  const wireframeScreenWidth = 375 //width de las screens en figma

//    Width-Percentage
//    Converts width dimension to percentage
//    @param dimension directly taken from design wireframes
//    @returns {string} percentage string e.g. '25%'

  export const wp = (dimension: number) => {
    return wp2dp((dimension * 100 / wireframeScreenWidth) + '%');
  };


//    Height-Percentage
//    Converts width dimension to percentage
//    @param dimension directly taken from design wireframes
//    @returns {string} percentage string e.g. '25%'

  export const hp = (dimension: number) => {
    return hp2dp((dimension * 100 / wireframeScreenHeight) + '%');
};