import Layout from "../../components/layout"
import Filter from "./components/filter"

const Initiatives = () => {
  return (
    <Layout>
      <div className="py-[80px]">
        <div className="container">
          <div className="flex justify-center">
            <div className="flex flex-col space-y-10 max-w-[800px]">
              <div className="flex flex-col items-center space-y-6 text-center">
                <h2 className="heading-xl text-white-100">Discover initiatives (RFPs)</h2>
                <p className="paragraph-lg text-white-500">The list below includes initial ideas that we think could make excellent Grants. This is a living list that will continue to update as ideas popup.</p>
              </div>
              <Filter/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Initiatives