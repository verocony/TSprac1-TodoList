import React from 'react';
import './App.css';
import Item from 'components/Item';



function App() {
  return (
   <>
   <div className='mainContainer'>
    <div className="appContainer">
      <Item text='투두리스트1' />
      <Item text='투두리스트2' />
      <Item text='투두리스트3' />
      <Item text='완료1' completed />
      <Item text='완료2' completed />

      <input type="text" 
        className='inputText'
        placeholder='내용을 입력해주세요'/>

    </div>
   </div>

   </>
  );
}

export default App;
