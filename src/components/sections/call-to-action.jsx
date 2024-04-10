import Button from "../ui/buttons"

const CallToAction = () => {
  return (
    <div className="py-[40px] max-md:pt-0">
      <div className="container">
        <div className="bg-gradient-to-br from-brand to-brandHover w-full py-10 flex justify-center rounded-2xl">
          <div className="flex flex-col space-y-10 px-4">
            <div className="max-w-[640px] flex flex-col space-y-2 text-center">
              <p className="paragraph-lg text-white-100">Have a project in mind?</p>
              <h2 className="heading-lg text-white-100">Let’s create something awesome.</h2>
            </div>
            <Button btn={'primary'} bg={'white'} text={'brand'} className={'label w-fit mx-auto text-center max-md:w-full'}>Apply for grant</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction