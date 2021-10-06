import React from "react"
import "./../styles/homeImage.css"
import Embed from 'react-embed'
function HomeImage()
{
    return(
        <div>
            <img src={require('../images/yo.jpeg').default} width="100%" />
            <div className="home-image-cl3">
                Continue With Your Course...
            </div>
            <div className="home-image-cl4">
                <h4>Data structure & Algorithm</h4>
                <Embed url="https://www.youtube.com/watch?v=KGqexebCcUo"/>
            </div>
            <div className="home-image-cl4">
                <h4>Database Management System</h4>
                <Embed url="https://www.youtube.com/watch?v=KGqexebCcUo"/>
            </div>
            <div className="home-image-cl4">
                <h4>Operating System</h4>
                <Embed url="https://www.youtube.com/watch?v=KGqexebCcUo"/>
            </div>
        </div>
    )
}
export default HomeImage;