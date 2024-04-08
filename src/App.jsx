import './index.css'
import Hero from './components/sections/hero.jsx'
import Layout from './components/layout.jsx'
import Grants from './components/sections/featured-grants.jsx'
import News from './components/sections/news.jsx'
import Questions from './components/sections/questions.jsx'
import ApplicationProcess from './components/sections/application-process.jsx'

function App() {
  return (
    <Layout>
      <Hero/>
      <Grants/>
      <News/>
      <Questions/>
      <ApplicationProcess/>
      {/* ... */}
    </Layout>
  )
}

export default App
