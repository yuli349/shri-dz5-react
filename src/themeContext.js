// import React from "react";
// const { Provider, Consumer } = React.createContext();
//
// const ThemeContextProvider = () => {
//     let state = {
//         theme: "Day"
//     };
//
//     let toggleTheme = () => {
//         this.setState(prevState => {
//             return {
//                 theme: prevState.theme === "Day" ? "Night" : "Day"
//             };
//         });
//     };
//
//     return (
//         <Provider
//             value={{ theme: state.theme, toggleTheme: toggleTheme }}
//         >
//             {props.children}
//         </Provider>
//     );
// }
//
// export { ThemeContextProvider, Consumer as ThemeContextConsumer };