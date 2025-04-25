import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './redux/Store.jsx';
import Form from './redux/Form.jsx';

const App = () => (
  <Provider store={Store}>
    <Form />
    
  </Provider>
);

export default App;
