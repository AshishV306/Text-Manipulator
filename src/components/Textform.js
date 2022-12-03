import React, {useState} from 'react'

export default function Textform(props) {

const upperCase =()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "Success");
}

// const speak = () => {
//     let msg = new SpeechSynthesisUtterance();
//     msg.text = text;
//     window.speechSynthesis.speak(msg);
//   }

//in case you wants to stop then try this
 const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
        props.showAlert("Now Speaking", "Success");
    }

 const Replace = () => {
        let newText = text.replaceAll(fWord,rWord);
        setText(newText);
        props.showAlert("Text Replaced", "Success");
    };

    const TitleCase = ()=>{
        let newText = text.split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(' ');
        setText(newText);
        props.showAlert("Converted to Titlecase", "Success");
      }

      const italics=()=>
 {
    let element = document.getElementById("mybox");
    element.style.fontFamily = "italics";
    props.showAlert("Converted to Italics", "Success");
 }

 const bold=()=>
 {
    let element = document.getElementById("mybox");
    element.style.fontWeight = "bold";
    props.showAlert("Converted to Bold", "Success");
 }


const copy =()=>{
    let text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "Success");
}


function handleDuplicates(){
            let wordArr = text.split(" ");
            let newText = wordArr.filter((item, pos)=>{
                return wordArr.indexOf(item) === pos;
            })
            newText = newText.join(" ");
            setText(newText);
            props.showAlert("Duplicate Word Removed", "Success");
    }

    // const newColor =()=>{
    //   let x = document.getElementById("mybox")
    //   let newc =color;
    // if(x.style.color==="black"){
    //    x.style.color = newc
    // }
    // else{
    //     x.style.color = "black"
    // }
    // }
    function handleClick() {
      setActiveColor(color);
      //setColorText('');
    }

const onChange =(event)=>{
    setText(event.target.value);
}
const [text, setText] = useState("");

const onChangeFind =(event)=>{
    findWord(event.target.value);
}
const onChangeReplace =(event)=>{
   replaceWord(event.target.value);
}

const changeColor =(event)=>{
  setcolor(event.target.value);
}
const [color, setcolor] = useState("")
const [fWord, findWord] = useState("");
const [rWord, replaceWord] = useState("");
const [ activeColor, setActiveColor ] = useState('');
  return (
    <>
  <div>
    <h2>{props.heading}</h2>
  
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={onChange}  style={{ color: activeColor }} placeholder="Enter text "  name="" id="mybox"  rows="8"></textarea>
    </div>

    <div className="mb-3">
    <textarea className="form-control" value={fWord} onChange={onChangeFind} placeholder="Enter word to find" name="" id="mybox"  rows="3"></textarea>
    </div>

    <div className="mb-3">
    <textarea className="form-control" value={rWord} onChange={onChangeReplace} placeholder="Enter word to replace" name="" id="mybox"  rows="3"></textarea>
    </div>

    <div className="mb-3">
    <textarea className="form-control" value={color} onChange={changeColor} placeholder="Enter your color choice" name="" id="mybox"  rows="3"></textarea>
    </div>

    <button type="submit" onClick={upperCase} class="btn btn-primary">Convert to UpperCase</button>
   
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>

    <button type="submit" onClick={Replace} className="btn btn-warning mx-2 my-2" id="toggle">Replace Word</button>

    <button className="btn btn-primary mx-1" onClick={TitleCase}> Title case</button>

    <button className="btn btn-primary mx-1" onClick={italics}> italic case</button>

    <button className="btn btn-primary mx-1" onClick={bold}> Bold case</button>

    <button className="btn btn-primary mx-1" onClick={copy}> Copy text</button>

    <button className="btn btn-primary mx-1" onClick={handleDuplicates}>Remove Duplicates</button>

    {/* <button className="btn btn-primary mx-1" onClick={newColor}> Change Color</button> */}

    <button className="btn btn-primary mx-1" onClick={handleClick}> Change Color</button>

    {/* <button className="btn btn-primary mx-1" onClick={copy}> Copy text</button> */}
  
  </div>
  
  <div className="conatiner my-3">
<p>{text.split(" ").length} words and {text.length} characters</p>
  </div>


  </>
  )
}




//1. challenge accepted : i have added a download file button by which u can download the text as a file
// const downloadTxtFile = () => {
//         const element = document.createElement("a");
//         const file = new Blob([text], {
//           type: "text/plain"
//         });
//         element.href = URL.createObjectURL(file);
//         element.download = "myFile.txt";
//         element.click();
// }
//  <button className='btn' onClick={downloadTxtFile}>Download Text</button>

//2. const textColorChange = ()=>{
//     //Chnaging text color using toogle buuton Black to Red
//     const x = document.getElementById("myBox")
//     if(x.style.color==="black"){
//        x.style.color = "red"
//     }
//     else{
//         x.style.color = "black"
//     }
// }

// 3.Challenge Accepted !!
// Reverse text Button
// const reversed = () => {
//     let splitWord = text.split("");

//     let reverseWord = splitWord.reverse("");
//     let joinedWords = reverseWord.join("");
//     let newText = joinedWords

//     setText(newText);
//   };

// 4.Challenge Accepted
// Remove Duplicate words

// function handleDuplicates(){
//             let wordArr = text.split(" ");
//             let newText = wordArr.filter((item, pos)=>{
//                 return wordArr.indexOf(item) === pos;
//             })
//             newText = newText.join(" ");
//             setText(newText);
//     }

// 5.Challenge Accepted

// Function to find phone numbers:

// const handleFindPhoneNumbers = () => {
//     const data = text.split(" ");
//     let numbers = [];
//     data.forEach((element) => {
//       if (element.length === 10 && !isNaN(Number(element))) {
//         numbers.push(element);
//       }
//     });
//     setPhoneNumbers(numbers);
//   };


// 6. this function copy text
// const copy =()=>{
//     let text=document.getElementById("myBox");
//     text.select();
//     navigator.clipboard.writeText(text.value);
// }