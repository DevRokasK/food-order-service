import React from 'react';
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Header } from './components/Header';
import { Home } from './components/Home';

@observer
export class App extends React.Component {

  public constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return <div className='App'>
      <div className='grid-container'>
        <header className='header'>
          <Header></Header>
        </header>
        <aside className='navigation'>

        </aside>
        <main className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </div>
    </div>
  }
}

export default App;
