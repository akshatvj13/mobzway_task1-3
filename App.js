import logo from './logo.svg';
import './App.css';
import { IncDec } from './IncDec';
import { ShowHide } from './ShowHide';
import { EnableDisable } from './EnableDisable';
import { TwoWayBinding } from './TwoWayBinding';
import { AddChildComponent } from './AddChildComponents';
import { Sum } from './Sum';
import { SearchBox } from './SearchBox';
import { RecordsArray } from './RecordsArray';
function App() {
  return (
    <>
      <div className='box'>
      <h1>Display Array of Records on Screen</h1>
      <RecordsArray />
      </div>
      <div className='box'>
        <h1>Show/Hide Elements on Screen</h1>
        <ShowHide />
      </div>

      <div className='box'>
        <h1>Enable/Disable a Button</h1>
        <EnableDisable />

      </div>

      <div className='box'>
        <h1>Two Way Data Binding using TextBox</h1>
        <TwoWayBinding />

      </div>

      <div className='box'>
        <h1>Dynamically add Child Components</h1>
        <AddChildComponent />

      </div>

      <div className='box'>
        <h1>Sum of two numbers</h1>
        <Sum />
      </div>

      <div className='box'>
        <h1>Increment/Decrement</h1>
        <IncDec />
      </div>

      <div className='box'>
        <h1>SearchBox</h1>
        <SearchBox />
      </div>

    </>
  );
}

export default App;
