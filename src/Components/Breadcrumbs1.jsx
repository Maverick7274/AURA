/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

function Breadcrumbs(props) {

    const link1 = props.link1
    const currentLink = props.currentLink
    const link1Name = props.link1Name
    const currentLinkName = props.currentLinkName


  return (
    <div className="z-[1000] flex mt-[6rem] justify-center items-center py-[1rem]">
        <div className="text-sm duration-500 bg-base-300 px-[2rem] rounded fixed breadcrumbs">
            <ul className="font-space-mono">
                <li><Link to={link1}>{link1Name}</Link></li>
                <li className="text-orange-600 font-[700]"><Link to={currentLink}>{currentLinkName}</Link></li>
            </ul>
        </div>

    </div>
  )
}

export default Breadcrumbs