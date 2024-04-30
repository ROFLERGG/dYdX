import { useParams } from "react-router-dom"
import Layout from "../../../components/layout"
import GrantData from "../../../data/grant-data.json"
import Badge from "../../../components/ui/badges"
import Button from "../../../components/ui/buttons"
import Sprite from "../../../assets/sprite.svg"
import { useState } from "react"

const GrantPage = () => {
  const { id } = useParams()
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ROFLERGG/dYdX/main/src/data/grant-data.json')
    .then(res => res.json())
    .then(data => {
      if (data) {
        setTimeout(() => {
          setData(data)
          setIsLoading(false)
        }, 500);
      }
    })
    .catch(err => 
      console.log("Error: ", err)
    )
  },[])
  
  const post = data.find(post => post.id == id)

  return (
    <Layout>
      <div className="py-[80px] max-lg:py-[40px]">
        <div className="container">
          <div className="flex justify-center">
            <div className={`flex flex-col w-[800px] ${post.image ? 'space-y-6' : ''}`}>
              {post.image &&
                <div className="rounded-2xl border-2 border-secondaryHover overflow-hidden">
                  <img width={800} height={400} className="object-cover object-center rounded-xl w-full h-full" src={post.image} alt={`image ${post.id}`} />
                </div>
              }
              <div className="flex flex-col">
                {/* head */}
                <div className="flex flex-col space-y-6">
                  <div className="flex flex-col space-y-2">
                    <div className="flex flex-col max-[500px]:items-center">
                      <span className="mono-paragraph-md text-white-500 w-fit">{post.category}</span>
                      <h2 className="heading-xl text-white-100 max-[500px]:text-center">{post.title}</h2>
                    </div>
                    <div className="flex justify-between items-center max-[500px]:flex-col max-[500px]:space-y-6">
                      <div className="flex items-center space-x-4 max-[500px]:flex-col max-[500px]:space-x-0 max-[500px]:space-y-4">
                      {post.status == "Completed" &&
                        <Badge variant={'success'} className={'space-x-2'}>
                          <span className="paragraph-sm text-white-100">{post.status}</span>
                          <svg className="w-5 h-5">
                            <use xlinkHref={Sprite + "#fi_check"}/>
                          </svg>
                        </Badge>
                      }
                      {post.status == "Funded" &&
                        <Badge variant={'funded'}>
                          <span className="paragraph-sm text-white-100">{post.status}</span>
                        </Badge>
                      }
                      {post.status == "Open" &&
                        <Badge variant={'open'}>
                          <span className="paragraph-sm text-white-100">{post.status}</span>
                        </Badge>
                      }
                      <div className="flex items-center space-x-2 max-[500px]:space-x-0 max-[500px]:flex-col">
                        <span className="paragraph-md text-tertiary">Funding amount:</span>
                        <span className="paragraph-md text-white-100">{post.amount}</span>
                      </div>
                      </div>
                      <Button btn={'primary'} bg={'brand'} text={'white'} className={'flex justify-center items-center space-x-3 max-[500px]:w-full'}>
                        <span className="label">Project link</span>
                        <svg className="w-4 h-4">
                          <use xlinkHref={Sprite + '#fi_external-link'}/>
                        </svg>
                      </Button>
                    </div>
                  </div>
                  {/* team */}
                  <div className="flex flex-col space-y-4">
                    <h2 className="heading-sm text-white-100">Team</h2>
                    <div className="flex items-center flex-wrap gap-4">
                      {post.team.map((member) => {
                        return (
                          <div className="p-2 bg-secondary rounded-full flex items-center space-x-4">
                            <div className="w-10 h-10 bg-secondaryHover rounded-full"></div>
                            <span className="pr-4 label text-white-100">{member}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className="py-10">
                  <div className="w-full h-px bg-subtle"></div>
                </div>
                {/* bottom */}
                <div className="flex flex-col space-y-10">
                  {/* description */}
                  <div className="flex flex-col space-y-4">
                    <h2 className="heading-sm text-white-100">Description</h2>
                    <p className="paragraph-md text-white-500">{post.description}</p>
                  </div>
                  {/* purpose */}
                  <div className="flex flex-col space-y-4">
                    <h2 className="heading-sm text-white-100">Purpose</h2>
                    <p className="paragraph-md text-white-500">{post.purpose}</p>
                  </div>
                  {/* execution */}
                  <div className="flex flex-col space-y-4">
                    <h2 className="heading-sm text-white-100">Execution</h2>
                    <p className="paragraph-md text-white-500">{post.execution}</p>
                  </div>
                  {/* payment structure */}
                  <div className="flex flex-col space-y-4">
                    <h2 className="heading-sm text-white-100">Payment Structure</h2>
                    <p className="paragraph-md text-white-500">{post.structure}</p>
                  </div>
                  {/* usefull links */}
                  <div className="flex flex-col space-y-4">
                    <h2 className="heading-sm text-white-100">Usefull Links</h2>
                    <div className="flex flex-col space-y-4">
                      {post.links.map((link) => {
                        return (
                          <Button href={link} link={'sm'} text={'brand'} className="w-fit">{link}</Button>
                        )
                      })}
                    </div>
                  </div>
                  {/* аunding transactions */}
                  <div className="flex flex-col space-y-4">
                    <h2 className="heading-sm text-white-100">Funding transactions</h2>
                    <div className="flex flex-col space-y-4">
                      <a href="" className="flex justify-between items-start gap-8 p-6 bg-secondary hover:bg-secondaryHover duration-150 ease-in-out rounded-2xl max-[500px]:flex-col">
                        <div className="flex flex-col space-y-4">
                          <div className="flex flex-col space-y-2">
                            <h2 className="heading-sm text-white-100">Round 9</h2>
                            <span className="mono-paragraph-md text-white-500">Date</span>
                          </div>
                          <p className="paragraph-md text-white-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi sapiente incidunt vel itaque. Ex animi deserunt, nulla velit incidunt porro totam. Quisquam, accusantium laborum.</p>
                        </div>
                        <div className="flex justify-between items-center gap-4">
                          <span className="mono-paragraph-md text-white-500">$250,000.00</span>
                          <svg className="w-4 h-4">
                            <use xlinkHref={Sprite + '#fi_external-link'}/>
                          </svg>
                        </div>
                      </a>
                      <a href="" className="flex justify-between items-start gap-8 p-6 bg-secondary hover:bg-secondaryHover duration-150 ease-in-out rounded-2xl max-[500px]:flex-col">
                        <div className="flex flex-col space-y-4">
                          <div className="flex flex-col space-y-2">
                            <h2 className="heading-sm text-white-100">Funding title</h2>
                            <span className="mono-paragraph-md text-white-500">Date</span>
                          </div>
                          <p className="paragraph-md text-white-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi sapiente incidunt vel itaque.</p>
                        </div>
                        <div className="flex justify-between items-center gap-4">
                          <span className="mono-paragraph-md text-white-500">$30,000.00</span>
                          <svg className="w-4 h-4">
                            <use xlinkHref={Sprite + '#fi_external-link'}/>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default GrantPage