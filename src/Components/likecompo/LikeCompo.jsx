import React, {useState} from 'react';
import "./styles.css"
import Image1 from "../../Images/html.png"
import Image2 from "../../Images/baby.jpeg"
import Image3 from "../../Images/css.jpeg"
import Image4 from "../../Images/indian.jpeg"
import Image5 from "../../Images/stack.png"
import Image6 from "../../Images/solve.jpeg"
import Image7 from "../../Images/hack.jpeg"


const LikeCompo = () => {
 
   const [firstcolor, setFirstColor] = useState("")
   const [secondcolor, setSecondColor] = useState("")
   const [thirdcolor, setThirdColor] = useState("")
   const [fourthcolor, setFourthColor] = useState("")
   const [fifthcolor, setFifthColor] = useState("")
   const [sixthcolor, setSixthColor] = useState("")
   const [seventhcolor, setSeventhColor] = useState("")


   const [score, setScore] = useState (0)
 


   const [correctColor] = useState("#00E18B")
   const [WrongColor] = useState("#B00F30")





   const [wrong, setWrong] = useState("")
   const [Correct, setCorrect] = useState(" ")

   const [wrong2, setWrongFace] = useState("")
   const [Correct2, setCorrectFace] = useState(" ")

   const [wrong3, setWrongCSS] = useState("")
   const [Correct3, setCorrectCSS] = useState(" ")

   const [wrong4, setWrongChelsea] = useState("")
   const [Correct4, setCorrectChelsea] = useState(" ")

 
   const [Correct5, setWrongStack] = useState(" ")
   const [wrong5, setCorrectStack] = useState(" ")

   const [wrong6, setWrongSolve] = useState("")
   const [Correct6, setCorrectSolve] = useState(" ")

   const [wrong7, setWrongHack] = useState("")
   const [Correct7, setCorrectHack] = useState(" ")


   

            // Truth1
   const truthFunction1 = (event) =>{
          
            setFirstColor(correctColor)
            setCorrect("Come for a hug!")
            setWrong(" ")
            event.preventDefault();
            setScore (score + 1)
   }

        // Truth2
   const truthFunction2 = (event) =>{
          
    setSecondColor(correctColor)
    setCorrectFace("You know right?. My face was even worse!!!")
    setWrongFace(" ")
    event.preventDefault();
    setScore (score + 1)

}

        // Truth 3
        const truthFunction3 = (event) =>{
                
            setThirdColor(correctColor)
            setCorrectCSS("I LIKE YOU!!!")
            setWrongCSS("")
            setScore (score + 1)
            event.preventDefault();
        }


        // Truth 4

        const truthFunction4 = (event) =>{
            setCorrectChelsea("I tell you!. We are nothing without their 'wideos' ")
            setWrongChelsea("")
            setFourthColor(correctColor)
            setScore (score + 1)
            event.preventDefault();
      }


        // Truth 5

        const truthFunction5 = (event) =>{
            setCorrectStack("Of Course we all do.")
            setWrongStack (" ")
            setFifthColor(correctColor)
            setScore (score + 1)
            event.preventDefault();
      }


        // Truth 6

        const truthFunction6 = (event) =>{
            setCorrectSolve(" **Fistbump** ")
            setWrongSolve("")
            setScore (score + 1)
            setSixthColor(correctColor)
            event.preventDefault();
      }


        // Truth 7

        const truthFunction7 = (event) =>{
            setCorrectHack("Me too!. **Hugs** ")
            setWrongHack("")
            setSeventhColor(correctColor)
            setScore (score + 1)
           
            event.preventDefault();
      }


    // wrongs
    // wrongs
    // wrongs


        // wrong1
        const WrongFunction1 = (event) =>{
            setFirstColor(WrongColor)
            setWrong("Lying Already?")
            setCorrect (" ")
            setScore (score - 1)
            event.preventDefault(); 

        
        }

        // wrong2
        const WrongFunction2 = (event) =>{
            setSecondColor(WrongColor)
            setWrongFace("Stop Lying!!!")
            setCorrectFace ("")
            setScore (score - 1)
            event.preventDefault(); 

        
        }

        // wrong3
        const WrongFunction3 = (event) =>{
            setThirdColor(WrongColor)
            setWrongCSS("LIAR!!!")
            setCorrectCSS(" ")
            setScore (score - 1)
            event.preventDefault(); 

        
        }


        // wrong4
        const WrongFunction4 = (event) =>{
            setFourthColor(WrongColor)
            setWrongChelsea("Thank you pinocchio!")
            setCorrectChelsea(" ")
            setScore (score - 1)
            event.preventDefault(); 

        
        }


          // wrong5
          const WrongFunction5 = (event) =>{
            setFourthColor(WrongColor)
            setWrongStack("")
            setCorrectStack(" ")
            
            event.preventDefault(); 

        
        }

        // wrong6
        const WrongFunction6 = (event) =>{
            setSixthColor(WrongColor)
            setWrongSolve("Yeah Right!!!")
            setCorrectSolve(" ")
            setScore (score - 1)
            event.preventDefault(); 

        
        }

        // wrong7
        const WrongFunction7 = (event) =>{ 
            setSeventhColor(WrongColor)
            setWrongHack("Okay then. Hack me now with HTML. I dare you!!!")
            setCorrectHack(" ")
            setScore (score - 1)
            event.preventDefault(); 

        
        }


        




    return (
    <div className ="everything"  >

            <h1 class ="text-center">HELLO DEVELOPER, WELCOME</h1>
                    <h2 class ="text-center">I DETECT LIES TOLD BY MOST DEVELOPERS.</h2>
           <h3 className ="text-center">I will change the background color to <span className ="green">GREEN</span>  when you answer correctly and to <span className ="red">RED</span> when you answer wrongly. Good Luck</h3>
           <p className ="text-center">Refresh to Reset the page</p>

        <section className= "like_box">
                        {/* Thumbnail 1 */}
                    <div className="row">
                    <div className="">
                        <div className="thumbnail" style= {{ backgroundColor: firstcolor }}>
                     
                        <img src={Image1} className = "Images img-responsive" alt="..."/>
                        <div className="caption">
                            <h3 > 
                                Question 1: You feel proud when a non-tech person sees you writing code. 
                                But deep down you thank God, they don't know that its just HTML.
                                
                            </h3>

                           
                           
                            <p><a href="#" className="btn btn-primary True-btn" role="button" onClick={truthFunction1}> TRUE </a> <a href="#" className="btn btn-default False-btn" role="button" onClick={WrongFunction1}>FALSE</a></p>
                            <h1 className ="text-center" style ={{color:"white"}}>{Correct}</h1>
                            <h1 className ="text-center" style ={{color:"white"}}>{wrong}</h1>
                        </div>
                        </div>
                    </div>
                    </div>

                                {/* Thumbnail 2 */}
                <div className="row">
                    <div className="">
                        <div className="thumbnail" style= {{ backgroundColor: secondcolor }} >
                       
                        <img src={Image2} className ="Images" alt="..."/>
                        <div className="caption">
                            <h3> Question 2: This was your face 90% of the time when you were first learning to code</h3>
                            <h4>Hint: Honesty is Key to getting this question right.</h4>
                            <p><a href="#" className="btn btn- True-btn" role="button" onClick={truthFunction2}>TRUE</a> <a href="#" className="btn btn-default False-btn" role="button"onClick={WrongFunction2}>FALSE</a></p>
                            <h1 className ="text-center" style ={{color:"white"}}>{Correct2} </h1>
                            <h1 className ="text-center" style ={{color:"white"}}>{wrong2}</h1>
                        </div>
                        </div>
                    </div>
                    </div>

                            {/* Thumbnail 3 */}
            <div className="row">
                <div className="">
                    <div className="thumbnail" style= {{ backgroundColor: thirdcolor }}>
                    
                    <img src= {Image3} className ="Images" alt="..."/>
                    <div className="caption">
                        <h3>Question 3: CSS is fun, easy to understand and loved by every programmer including you.</h3>
                        <h4>Hint: Again, Please dont lie</h4>
                        <p><a href="#" className="btn btn- True-btn" role="button" onClick={WrongFunction3}>TRUE</a> <a href="#" className="btn btn-default False-btn" role="button" onClick={truthFunction3}>FALSE</a></p>
                        <h1 className ="text-center" style ={{color:"white"}}   >{Correct3}</h1>
                        <h1 className ="text-center" style ={{color:"white"}}> {wrong3}  </h1>
                    </div>
                    </div>
                </div>
                </div>

                    {/* Thumbnail 4 */}
                <div className="row">
                <div className="">
                    <div className="thumbnail" style= {{ backgroundColor: fourthcolor }}>
           
                    <img src={Image4} className ="Images"alt="..."/>
                    <div className="caption">
                        <h3>Question 4: You watch an inidan on Youtube at least a month.</h3>
                      
                        <p><a href="#" className="btn btn- True-btn" role="button"  onClick={truthFunction4}>TRUE</a> <a href="#" className="btn btn-default False-btn" role="button" onClick={WrongFunction4}>NEVER</a></p>
                        <h1 className ="text-center" style ={{color:"white"}}>{Correct4}</h1>
                        <h1 className ="text-center" style ={{color:"white"}}> {wrong4}  </h1>
                    </div>
                    </div>
                </div>
                </div>


                {/* Thumbnail 5 */}
                <div className="row">
                <div className="">
                    <div className="thumbnail" style= {{ backgroundColor: fifthcolor }}>
           
                    <img src={Image5} className= "Images"/>
                    <div className="caption">
                        <h3> Question 5: You copy code you dont understand from stackoverflow to make your code work</h3>
                        <h4>Hint:The lying button doesn't work on this question. </h4>
                        <p><a href="#" className="btn btn- True-btn" role="button" onClick={truthFunction5}>AUTOMATICALLY TRUE</a> <a href="#" className="btn btn-default False-btn" role="button" onClick ={WrongFunction5}>LIARS SHOULD CLICK THIS</a></p>
                        <h1 className ="text-center" style ={{color:"white"}}>{Correct5}</h1>
                        <h1 className ="text-center" style ={{color:"white"}}>{wrong5}</h1>
                    </div>
                    </div>
                </div>
                </div>


                {/* Thumbnail 6 */}

                <div className="row">
                <div className="">
                    <div className="thumbnail" style= {{ backgroundColor: sixthcolor }}>
                   
                    <img src={Image6}alt="..."/>
                    <div className="caption">
                        <h3> Question 6: You are learning to code because you really love to solve problems and not because of the money</h3>
                        <h4>Hint: Remember your frustrated face when you cant find a simple bug and answer accordingly.</h4>
                        <p><a href="#" className="btn btn- True-btn" role="button" onClick={WrongFunction6}>True</a> <a href="#" className="btn btn-default False-btn" role="button" onClick={truthFunction6}>False</a></p>
                        <h1 className ="text-center" style ={{color:"white"}}>{Correct6}</h1>
                        <h1 className ="text-center" style ={{color:"white"}}> {wrong6}  </h1>
                    </div>
                    </div>
                </div>
                </div>


                    {/* Thumbnail 7 */}
                <div className="row">
                <div className="">
                    <div className="thumbnail" style= {{ backgroundColor: seventhcolor }}>
                   
                    <img src={Image7}/>
                    <div className="caption">
                        <h3>Question 7: You decided to learn how to code because you thought you will be become a hacker but you ended becoming at expert at copying and pasting. </h3>
                        <p></p>
                        <p><a href="#" className="btn btn- True-btn" role="button" onClick={truthFunction7}>True</a> <a href="#" className="btn btn-default False-btn" role="button" onClick={WrongFunction7}>False</a></p>
                        <h1 className ="text-center" style ={{color:"white"}}   >{Correct7}</h1>
                        <h1 className ="text-center" style ={{color:"white"}}> {wrong7}  </h1>
                    </div>
                    </div>
                </div>
                </div>
                </section>   

                <h1 className ="text-center">YOUR IS SCORE: {score} / 7</h1>

               


            
            
            
                     
        </div>
    );

    
}

export default LikeCompo;
