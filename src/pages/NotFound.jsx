import Layout from "../components/layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex-1 flex flex-col justify-center">
        <div className="container">
          <div className="max-w-[600px] mx-auto flex flex-1 flex-col items-center space-y-6">
            <h1 className="hero text-white-500">404</h1>
            <h2 className="heading-lg text-white-500">Page  not found :(</h2>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound