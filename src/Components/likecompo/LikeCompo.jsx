import React, {useState} from 'react';
import "./styles.css"
import Image1 from "../../Images/1.png"
import Image2 from "../../Images/baby.jpeg"
import Image3 from "../../Images/css.jpeg"
import Image4 from "../../Images/chelsea.png"
import Image5 from "../../Images/stack.png"


const LikeCompo = () => {
 
   const [color, setColor] = useState("white")
   const [correctColor] = useState("darkcyan")
   const [WrongColor] = useState("crimson")

   const truthFunction = (event) =>{
          
            setColor(correctColor)
            event.preventDefault();
   }

   const WrongFunction = (event) =>{
    setColor(WrongColor)
    event.preventDefault();
}

    return (
    <div className ="everything" style= {{ backgroundColor: color }} >

           <h1 className ="text-center">WELCOME</h1>
           <h3 className ="text-center">I will change the background color to <span className = "green">Green</span>  when you answer correctly and <span className ="red">Red</span>  when you answer wrongly. Good Luck</h3>
           <p className ="text-center">Refresh to Reset the page</p>

        <section className= "like_box">
                        {/* Thumbnail 1 */}
                    <div className="row col-sm-6">
                    <div className="">
                        <div className="thumbnail">
                        <img src={Image1} className = "Images img-responsive" alt="..."/>
                        <div className="caption">
                            <h3>The above Image is the React Logo</h3>
                           
                            <p><a href="#" className="btn btn-primary True-btn" role="button" onClick={truthFunction}> TRUE </a> <a href="#" className="btn btn-default False-btn" role="button" onClick={WrongFunction}>FALSE</a></p>
                        </div>
                        </div>
                    </div>
                    </div>

                                {/* Thumbnail 2 */}
                                <div className="row">
                    <div className="">
                        <div className="thumbnail">
                        <img src={Image2} className ="Images" alt="..."/>
                        <div className="caption">
                            <h3>Your face when you were first learning to code</h3>
                            <p>Hint: Honesty is Key</p>
                            <p><a href="#" className="btn btn- True-btn" role="button" onClick={truthFunction}>TRUE</a> <a href="#" className="btn btn-default False-btn" role="button"onClick={WrongFunction}>FALSE</a></p>
                        </div>
                        </div>
                    </div>
                    </div>

                            {/* Thumbnail 3 */}
                            <div className="row">
                <div className="">
                    <div className="thumbnail">
                    <img src= {Image3} className ="Images" alt="..."/>
                    <div className="caption">
                        <h3>CSS is fun, easy to understand and loved by every programmer including you.</h3>
                        <p>Hint: Again, Please dont lie</p>
                        <p><a href="#" className="btn btn- True-btn" role="button" onClick={WrongFunction}>TRUE</a> <a href="#" className="btn btn-default False-btn" role="button" onClick={truthFunction}>FALSE</a></p>
                    </div>
                    </div>
                </div>
                </div>

                    {/* Thumbnail 4 */}
                <div className="row">
                <div className="">
                    <div className="thumbnail">
                    <img src={Image4} className ="Images"alt="..."/>
                    <div className="caption">
                        <h3>CHELSEA FC IS THE BEST TEAM IN THE WORLD</h3>
                        
                        <p><a href="#" className="btn btn- True-btn" role="button"  onClick={truthFunction}>SO TRUE</a> <a href="#" className="btn btn-default False-btn" role="button" onClick={WrongFunction}>FOR HATERS ONLY</a></p>
                    </div>
                    </div>
                </div>
                </div>


                {/* Thumbnail 5 */}
                <div className="row">
                <div className="">
                    <div className="thumbnail">
                    <img src={Image5} className= "Images"/>
                    <div className="caption">
                        <h3>You copy code you dont understand from stackoverflow to make your code work</h3>
                        
                        <p><a href="#" className="btn btn- True-btn" role="button" onClick={truthFunction}>True</a> <a href="#" className="btn btn-default False-btn" role="button" onClick={truthFunction}>True Again</a></p>
                    </div>
                    </div>
                </div>
                </div>


                {/* Thumbnail 6 */}

                <div className="row">
                <div className="">
                    <div className="thumbnail">
                    <img src="..." alt="..."/>
                    <div className="caption">
                        <h3>Thumbnail label</h3>
                        <p>...</p>
                        <p><a href="#" className="btn btn- True-btn" role="button">Button</a> <a href="#" className="btn btn-default False-btn" role="button">Button</a></p>
                    </div>
                    </div>
                </div>
                </div>


                    {/* Thumbnail 7 */}
                <div className="row">
                <div className="">
                    <div className="thumbnail">
                    <img src="..." alt="..."/>
                    <div className="caption">
                        <h3>Thumbnail label</h3>
                        <p>...</p>
                        <p><a href="#" className="btn btn- True-btn" role="button">Button</a> <a href="#" className="btn btn-default False-btn" role="button">Button</a></p>
                    </div>
                    </div>
                </div>
                </div>
                </section>   

            <h4 className ="text-center">THANKS FOR PLAYING</h4>
            <h5 className ="text-center">Refresh to restart</h5>
            
                     
        </div>
    );
}

export default LikeCompo;
