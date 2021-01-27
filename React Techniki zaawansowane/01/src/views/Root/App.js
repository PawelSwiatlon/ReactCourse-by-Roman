import style from './App.module.scss';
import ItemsList from '../../components/ItemsList/ItemsList';

function App() {
  return (
    <div className={style.app}>
      <ItemsList></ItemsList>
    </div>
  );
}

export default App;
