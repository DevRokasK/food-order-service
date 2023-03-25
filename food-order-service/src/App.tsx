import React from 'react';
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation'
import { Home } from './components/Home';
import { RestaurantStore } from './stores/RestaurantStore';

@observer
export class App extends React.Component {
  private store: RestaurantStore;

  public constructor(props: any) {
    super(props);
    this.store = new RestaurantStore();
  }

  public render(): JSX.Element {
    return <div className='App'>
      <div className='grid-container'>
        <header className='header'>
          <Header></Header>
        </header>
        <aside className='navigation'>
          <Navigation></Navigation>
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
