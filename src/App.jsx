import './assets/styles/global.scss';

import { Layout } from './components/layout/layout';
import { Header } from './components/layout/header/Header';
import { Content } from './components/ui/content/Content';
import { CardsList } from './components/cardsList/CardsList';

export function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  )
}