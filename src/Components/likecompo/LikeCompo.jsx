import React, {useState} from 'react';
import "./styles.css"
import Image1 from "../../Images/1.png"
import Image2 from "../../Images/baby.jpeg"
import Image3 from "../../Images/css.jpeg"
import Image4 from "../../Images/chelsea.png"
import Image5 from "../../Images/stack.png"
import Image6 from "../../Images/solve.jpeg"
import Image7 from "../../Images/hack.jpeg"


const LikeCompo = () => {
 
   const [color, setColor] = useState("white")
   const [correctColor1] = useState("#4d7902")
   const [WrongColor1] = useState("#99231d")
   const [correctColor2] = useState("#059142")
   const [WrongColor2] = useState("#661813")
   const [correctColor3] = useState("#06c258")
   const [WrongColor3] = useState("#801e18")
   const [correctColor4] = useState("#059142")
   const [WrongColor4] = useState("#4d120e")
   const [correctColor5] = useState("#004d00")
   const [WrongColor5] = useState("#99231d")
   const [correctColor6] = useState("#06c258")
   const [WrongColor6] = useState("#801e18")
   const [correctColor7] = useState("#059142")
   const [WrongColor7] = useState("#99231d")




   const [wrong, setWrong] = useState("")
   const [Correct, setCorrect] = useState(" ")

   const [wrong2, setWrongFace] = useState("")
   const [Correct2, setCorrectFace] = useState(" ")

   const [wrong3, setWrongCSS] = useState("")
   const [Correct3, setCorrectCSS] = useState(" ")

   const [wrong4, setWrongChelsea] = useState("")
   const [Correct4, setCorrectChelsea] = useState(" ")

 
   const [Correct5, setCorrectStack] = useState(" ")

   const [wrong6, setWrongSolve] = useState("")
   const [Correct6, setCorrectSolve] = useState(" ")

   const [wrong7, setWrongHack] = useState("")
   const [Correct7, setCorrectHack] = useState(" ")


   

            // Truth1
   const truthFunction1 = (event) =>{
          
            setColor(correctColor1)
            setCorrect("CORRECT ANSWER!!!")
            setWrong(" ")
            event.preventDefault();
   }

        // Truth2
   const truthFunction2 = (event) =>{
          
    setColor(correctColor2)
    setCorrectFace("You know right?. My face was even worse!!!")
    setWrongFace(" ")
    event.preventDefault();

}

        // Truth 3
        const truthFunction3 = (event) =>{
                
            setColor(correctColor3)
            setCorrectCSS("I LIKE YOU!!!")
            setWrongCSS("")
            event.preventDefault();
        }


        // Truth 4

        const truthFunction4 = (event) =>{
            setCorrectChelsea("BLUE IS THE COLOR!!!")
            setWrongChelsea("")
            setColor(correctColor4)
            event.preventDefault();
      }


        // Truth 5

        const truthFunction5 = (event) =>{
            setCorrectStack("I WONT EVEN ALLOW YOU TO LIE ON THIS ONE")
            setColor(correctColor5)
            event.preventDefault();
      }


        // Truth 6

        const truthFunction6 = (event) =>{
            setCorrectSolve(" **Fistbump** ")
            setWrongSolve("")
            setColor(correctColor6)
            event.preventDefault();
      }


        // Truth 7

        const truthFunction7 = (event) =>{
            setCorrectHack(" 'HAHAHAHAHA.. Me too!. **Hugs**' ")
            setWrongHack("")
            setColor(correctColor7)
            event.preventDefault();
      }


    // wrongs
    // wrongs
    // wrongs


        // wrong1
        const WrongFunction1 = (event) =>{
            setColor(WrongColor1)
            setWrong("WRONG ANSWER!!!")
            setCorrect (" ")
            event.preventDefault(); 

        
        }

        // wrong2
        const WrongFunction2 = (event) =>{
            setColor(WrongColor2)
            setWrongFace("Stop Lying!!!")
            setCorrectFace ("")
            event.preventDefault(); 

        
        }

        // wrong3
        const WrongFunction3 = (event) =>{
            setColor(WrongColor3)
            setWrongCSS("LIAR!!!")
            setCorrectCSS(" ")
            event.preventDefault(); 

        
        }


        // wrong4
        const WrongFunction4 = (event) =>{
            setColor(WrongColor4)
            setWrongChelsea("WHERE IS YOUR CHAMPIOUS LEAGUE TROPHY?")
            setCorrectChelsea(" ")
            event.preventDefault(); 

        
        }

        // wrong6
        const WrongFunction6 = (event) =>{
            setColor(WrongColor5)
            setWrongSolve("Yeah Right!!!")
            setCorrectSolve(" ")
            event.preventDefault(); 

        
        }

        // wrong7
        const WrongFunction7 = (event) =>{
            setColor(WrongColor6)
            setWrongHack("Okay then. Hack me now with HTML. I dare you!!!")
            setCorrectHack(" ")
            event.preventDefault(); 

        
        }







    return (
    <div className ="everything" style= {{ backgroundColor: color }} >

            <h1 class ="text-center">I AM A LIE DETECTOR</h1>
           <h3 className ="text-center">I will change the background color to <span className ="green">GREEN</span>  when you answer correctly and to <span className ="red">RED</span> when you answer wrongly. Good Luck</h3>
           <p className ="text-center">Refresh to Reset the page</p>

        <section className= "like_box">
                        {/* Thumbnail 1 */}
                    <div className="row">
                    <div className="">
                        <div className="thumbnail">
                        <h4 className ="text-center" style ={{color:correctColor1}}>{Correct}</h4>
                        <h4 className ="text-center" style ={{color:WrongColor1}}>{wrong}</h4>
                        <img src={Image1} className = "Images img-responsive" alt="..."/>
                        <div className="caption">
                            <h3>The above Image is the React Logo</h3>
                           
                            <p><a href="#" className="btn btn-primary True-btn" role="button" onClick={truthFunction1}> TRUE </a> <a href="#" className="btn btn-default False-btn" role="button" onClick={WrongFunction1}>FALSE</a></p>
                        </div>
                        </div>
                    </div>
                    </div>

                                {/* Thumbnail 2 */}
                <div className="row">
                    <div className="">
                        <div className="thumbnail">
                        <h4 className ="text-center" style ={{color:correctColor1}}>{Correct2} </h4>
                        <h4 className ="text-center" style ={{color:WrongColor1}}>{wrong2}</h4>
                        <img src={Image2} className ="Images" alt="..."/>
                        <div className="caption">
                            <h3>This was your face 90% of the time when you were first learning to code</h3>
                            <p>Hint: Honesty is Key to getting this question right.</p>
                            <p><a href="#" className="btn btn- True-btn" role="button" onClick={truthFunction2}>TRUE</a> <a href="#" className="btn btn-default False-btn" role="button"onClick={WrongFunction2}>FALSE</a></p>
                        </div>
                        </div>
                    </div>
                    </div>

                            {/* Thumbnail 3 */}
            <div className="row">
                <div className="">
                    <div className="thumbnail">
                    <h4 className ="text-center" style ={{color:correctColor1}}   >{Correct3}</h4>
                    <h4 className ="text-center" style ={{color:WrongColor1}}> {wrong3}  </h4>
                    <img src= {Image3} className ="Images" alt="..."/>
                    <div className="caption">
                        <h3>CSS is fun, easy to understand and loved by every programmer including you.</h3>
                        <p>Hint: Again, Please dont lie</p>
                        <p><a href="#" className="btn btn- True-btn" role="button" onClick={WrongFunction3}>TRUE</a> <a href="#" className="btn btn-default False-btn" role="button" onClick={truthFunction3}>FALSE</a></p>
                    </div>
                    </div>
                </div>
                </div>

                    {/* Thumbnail 4 */}
                <div className="row">
                <div className="">
                    <div className="thumbnail">
                    <h4 className ="text-center" style ={{color:correctColor1}}>{Correct4}</h4>
                    <h4 className ="text-center" style ={{color:WrongColor1}}> {wrong4}  </h4>
                    <img src={Image4} className ="Images"alt="..."/>
                    <div className="caption">
                        <h3>chelsea FC is the best team in the world.</h3>
                      
                        <p><a href="#" className="btn btn- True-btn" role="button"  onClick={truthFunction4}>SO TRUE</a> <a href="#" className="btn btn-default False-btn" role="button" onClick={WrongFunction4}>FOR HATERS ONLY</a></p>
                    </div>
                    </div>
                </div>
                </div>


                {/* Thumbnail 5 */}
                <div className="row">
                <div className="">
                    <div className="thumbnail">
                    <h4 className ="text-center" style ={{color:correctColor1}}>{Correct5}</h4>
                    <img src={Image5} className= "Images"/>
                    <div className="caption">
                        <h3>You copy code you dont understand from stackoverflow to make your code work</h3>
                        <p>Hahaha.. Now you cant lie</p>
                        <p><a href="#" className="btn btn- True-btn" role="button" onClick={truthFunction5}>True</a> <a href="#" className="btn btn-default False-btn" role="button" onClick={truthFunction5}>True Again</a></p>
                    </div>
                    </div>
                </div>
                </div>


                {/* Thumbnail 6 */}

                <div className="row">
                <div className="">
                    <div className="thumbnail">
                    <h4 className ="text-center" style ={{color:correctColor1}}   >{Correct6}</h4>
                    <h4 className ="text-center" style ={{color:WrongColor1}}> {wrong6}  </h4>
                    <img src={Image6}alt="..."/>
                    <div className="caption">
                        <h3>You are learning to code because you really love to solve problems and not because of the money</h3>
                        <p>Hint: Remember your frustrated face when you cant find a simple bug and answer accordingly.</p>
                        <p><a href="#" className="btn btn- True-btn" role="button" onClick={WrongFunction6}>True</a> <a href="#" className="btn btn-default False-btn" role="button" onClick={truthFunction6}>False</a></p>
                    </div>
                    </div>
                </div>
                </div>


                    {/* Thumbnail 7 */}
                <div className="row">
                <div className="">
                    <div className="thumbnail">
                    <h4 className ="text-center" style ={{color:correctColor1}}   >{Correct7}</h4>
                    <h4 className ="text-center" style ={{color:WrongColor1}}> {wrong7}  </h4>
                    <img src={Image7}/>
                    <div className="caption">
                        <h3>You decided to learn how to code because you thought you will be become a hacker but you ended becoming at expert at copying and pasting. </h3>
                        <p></p>
                        <p><a href="#" className="btn btn- True-btn" role="button" onClick={truthFunction7}>True</a> <a href="#" className="btn btn-default False-btn" role="button" onClick={WrongFunction7}>False</a></p>
                    </div>
                    </div>
                </div>
                </div>
                </section>   

            <h2 className ="text-center">THANKS FOR BEING HONEST. IF YOU WERENT, REFRESH AND TRY AGAIN.</h2>
            
            
                     
        </div>
    );
}

export default LikeCompo;
