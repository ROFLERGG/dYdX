import Grid from "./../../assets/grid.png"
import Wave from "./../../assets/wave.png"
import ProcessCard from "../ui/process"

const ApplicationProcess = () => {
  return (
    <div className="pb-[80px]">
      <div className="container max-lg:mx-0 max-lg:px-0">
        <div className="flex flex-col">
          <div className="flex justify-center relative overflow-hidden">
            <div className="max-w-[600px] py-[80px] max-lg:py-[40px] z-50">
              <div className="px-4 flex flex-col items-center space-y-6">
                <div className="flex flex-col space-y-4 text-center">
                  <h2 className="heading-lg text-white-100 text-center">Application
                    <span className="inline-block relative px-2">
                      <span>process</span>
                      <img className="absolute top-full -inset-x-1/2 translate-x-1/2" src={Wave} alt="Oval" />
                    </span>
                  </h2>
                  <p className="paragraph-lg text-white-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.</p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 min-w-[920px] h-full">
              <img className="grid object-cover object-center z-10 h-full" width={920} height={320} src={Grid} alt="grid" />
            </div>
          </div>
          <div className="flex justify-between space-x-6 px-6">
            {/* ProcessCard */}
            <ProcessCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationProcess