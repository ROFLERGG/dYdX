import { useParams } from "react-router-dom"
import Layout from "../../../components/layout"
import GrantData from "./../data/grant-data.json"
import Badge from "../../../components/ui/badges"
import Button from "../../../components/ui/buttons"
import Sprite from "../../../assets/sprite.svg"

const GrantPage = () => {
  const { id } = useParams();

  const post = GrantData.find(post => post.id == id)

  return (
    <Layout>
      <div className="py-[80px] max-lg:py-[40px]">
        <div className="container">
          <div className="flex justify-center">
            <div className={`flex flex-col w-[800px] ${post.image ? 'space-y-6' : ''}`}>
              {post.image &&
                <div className="rounded-2xl bg-subtle overflow-hidden">
                  <img className="object-cover object-center rounded-2xl w-full h-full" src={post.image} alt={`image ${post.id}`} />
                </div>
              }
              <div className="flex flex-col">
                {/* head */}
                <div className="flex flex-col space-y-6">
                  <div className="flex flex-col space-y-2">
                    <div className="flex flex-col">
                      <span className="mono-paragraph-md text-white-500 w-fit">{post.category}</span>
                      <h2 className="heading-xl text-white-100">{post.title}</h2>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
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
                      <div className="flex items-center space-x-2">
                        <span className="paragraph-md text-tertiary">Funding amount:</span>
                        <span className="paragraph-md text-white-100">{post.amount}</span>
                      </div>
                      </div>
                      <Button btn={'primary'} bg={'brand'} text={'white'} className={'flex items-center space-x-3'}>
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
                <div className="py-10"><div className="w-full h-px bg-subtle"></div></div>
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