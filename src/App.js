import React, {Fragment} from 'react';
import {Footer} from "./components/Footer/Footer";
import {Main} from "./components/Main/Main";
import {ModalProvider} from "./components/Modal/Modal";

import './sass/main-components.scss';

function App() {

  return (
      <ModalProvider>
          <Fragment>
              <div className="main-wrapper">
                  <Main />
                  <Footer/>
              </div>
          </Fragment>
      </ModalProvider>
  );
}

export default App;
