import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '판교 맛집 리스트'

  return (
    <div className="App">
      <div className="black-nav">
        <div>Dev Blog</div>
      </div>
      <div className="list">
        <h4> { posts } </h4>
        <p>test</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
