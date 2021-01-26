import style from './App.module.scss';
import ItemsList from './ItemsList/ItemsList';

function App() {
  return (
    <div className={style.app}>
      <ItemsList></ItemsList>
    </div>
  );
}

export default App;
