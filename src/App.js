import './App.css';
import ColorPicker from './components/col';
function App() {
  const colors = [
    'red', 'green', 'blue', 'yellow', 'purple',
    'orange', 'pink', 'brown', 'teal', 'indigo', 'magenta', 'lime'
  ];
  return (
    <div>
      <h1></h1>
    <ColorPicker colors={colors} />
  </div>
  );
}

export default App;
