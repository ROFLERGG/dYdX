import Layout from "../../components/layout"
import CallToAction from "../../components/sections/call-to-action"
import Button from "../../components/ui/buttons"
import GrantCard from "./components/card"

const FundedGrants = () => {
  return (
    <Layout>
      <div className="py-[80px] max-lg:py-[40px]">
        <div className="container">
          <div className="flex flex-col space-y-10">
            <div className="flex justify-center">
              <h2 className="heading-xl text-white-100">Funded grants</h2>
            </div>
            <div className="flex flex-col space-y-3">
              <div className='flex justify-start'>
                <div className="flex gap-3 snap-mandatory overflow-x-scroll scrollbar-none">
                  <Button btn={'ghost'} className={`text-white-500 shrink-0 snap-start`}>All</Button>
                  <Button btn={'ghost'} className={`text-white-500 shrink-0 snap-start`}>Technical / Tool Development</Button>
                  <Button btn={'ghost'} className={`text-white-500 shrink-0 snap-start`}>Governance</Button>
                  <Button btn={'ghost'} className={`text-white-500 shrink-0 snap-start`}>Growth / Marketing</Button>
                  <Button btn={'ghost'} className={`text-white-500 shrink-0 snap-start`}>Analytics</Button>
                  <Button btn={'ghost'} className={`text-white-500 shrink-0 snap-start`}>Third Party Provider</Button>
                </div>
              </div>
              <div className="flex justify-start">
                <label class="flex items-center cursor-pointer pl-2">
                  <input type="checkbox" value="" class="sr-only peer"/>
                  <div className="relative w-[34px] h-3.5 rounded-full bg-secondary peer-checked:bg-brand transition-all duration-100 ease-in-out peer after:content-[''] after:absolute after:w-[18px] after:h-[18px] after:bg-white-100 after:rounded-full after:inset-y-1/2 after:-translate-y-1/2 after:peer-checked:translate-x-full rtl:after:peer-checked:-translate-x-full after:transition-all after:ease-in-out after:duration-150"></div>
                  <span class="ms-3 text-white-500 peer-checked:text-white-100 duration-300">Show only completed</span>
                </label>
              </div>
            </div>
            <div className="grid grid-cols-4 max-[1600px]:grid-cols-3 max-[1200px]:grid-cols-2 max-sm:grid-cols-1">
              {/* card */}
              <GrantCard/>
            </div>
          </div>
        </div>
        <CallToAction/>
      </div>
    </Layout>
  )
}

export default FundedGrants