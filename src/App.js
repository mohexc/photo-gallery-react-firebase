import Title from './components/Title';
import React from 'react';
import './App.less';
import UploadForm from './components/UploadForm';


const App = () => {


  return (
    <React.Fragment>
      <Title />
      <UploadForm />
    </React.Fragment>
  )
}

export default App;