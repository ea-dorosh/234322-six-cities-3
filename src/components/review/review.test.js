// import React from "react";
// import renderer from "react-test-renderer";
// import Main from "./main.jsx";
//
// const offers = [
//   {
//     name: `apartment-1 name string`,
//     price: 50,
//     img: `url path-1 string`,
//     isPremium: true,
//     type: `string`,
//     rating: 4.0,
//     coords: {
//       x: 42.3909553943508,
//       y: 42.3909553943508
//     }
//   },
//   {
//     name: `apartment-2 name string`,
//     price: 250, img: `url path-2 string`,
//     isPremium: true,
//     type: `string`,
//     rating: 4.0,
//     coords: {
//       x: 42.3909553943508,
//       y: 42.3909553943508
//     }
//   },
//   {
//     name: `apartment-3 name string`,
//     price: 500, img: `url path-3 string`,
//     isPremium: true,
//     type: `string`,
//     rating: 4.0,
//     coords: {
//       x: 42.3909553943508,
//       y: 42.3909553943508
//     }
//   }
// ];
//
// it(`Should Main render correctly`, () => {
//   const tree = renderer
//     .create(<Main
//       advertsCount={15}
//       offers={offers}
//       onPlaceNameHeaderClick={()=>{}}
//     />)
//     .toJSON();
//
//   expect(tree).toMatchSnapshot();
// });
//
