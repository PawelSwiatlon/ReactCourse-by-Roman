import style from './App.module.scss';

function App() {
  return (
    <div className={style.app}>
      <div class="box">
        <h1 class="title is-1">
          Hello World
        </h1>
        <button class="button is-large is-primary is-rounded">Click me!</button>
      </div>
    </div>
  );
}

export default App;
