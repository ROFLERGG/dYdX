import './index.css'
import Hero from './components/sections/hero.jsx'
import Layout from './components/layout.jsx'
import Grants from './components/sections/featured-grants.jsx'
import News from './components/sections/news.jsx'

function App() {
  return (
    <Layout>
      <Hero/>
      <Grants/>
      <News/>
      {/* ... */}
    </Layout>
  )
}

export default App
