import Layout from './../components/layout.jsx'
import Hero from './../components/sections/hero.jsx'
import Grants from './../components/sections/featured-grants.jsx'
import News from './../components/sections/news.jsx'
import Questions from './../components/sections/questions.jsx'
import ApplicationProcess from './../components/sections/application-process.jsx'
import CallToAction from './../components/sections/call-to-action.jsx'

const Home = () => {
  return (
    <Layout>
      <Hero/>
      <Grants/>
      <News/>
      <Questions/>
      <ApplicationProcess/>
      <CallToAction/>
      {/* ... */}
    </Layout>
  )
}

export default Home