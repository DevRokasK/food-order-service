import React from 'react';
import './styles/App.css';
import { observer } from 'mobx-react';
import { Header } from './components/Header';

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

        </main>
      </div>
    </div>
  }
}

export default App;
