import Layout from "../../components/layout"
import CallToAction from "../../components/sections/call-to-action"
import CardFilter from "./components/card-filter"

const FundedGrants = () => {
  return (
    <Layout>
      <div className="py-[80px] max-lg:py-[40px]">
        <div className="container">
          <div className="flex flex-col space-y-10">
            <div className="flex justify-center">
              <h2 className="heading-xl text-white-100">Funded grants</h2>
            </div>
            <CardFilter/>
          </div>
        </div>
        <CallToAction/>
      </div>
    </Layout>
  )
}

export default FundedGrants