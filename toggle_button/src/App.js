import './App.css';
import React from 'react';

function App() {
  const [switcher, changeSwitcher] = React.useState(false);
  const [mode,changeMode] = React.useState(0);
  const pattern = React.useRef(null);
  const textOn = React.useRef(null);
  const textOff = React.useRef(null);
  const [textOnMode, changeTextOnMode] = React.useState("");
  const [textOfMode, changeTextOffMode] = React.useState("");
  
  const handleToggle = ()=>{
    if(mode===1){
      if(switcher===false){
        textOff.current.innerHTML="";
      }else{
        textOn.current.innerHTML="";
      }
    }
    changeSwitcher(!switcher);
  }
  
  const handleChangeMode = ()=>{
     
    if(mode===1){
      if(switcher===false){
        textOff.current.innerHTML="";
      }else{
        textOn.current.innerHTML="";
      }
    }

    if(mode===1){
      changeMode(0);
    }else changeMode(1);
    
  }

  

  const handleChangeTextOffMode = (event)=>{
    changeTextOffMode(event.target.value);
  }
  const handleChangeTextOnMode = (event)=>{
    changeTextOnMode(event.target.value);
  }
  
  React.useEffect(()=>{
    if(mode===1){
      if(switcher===false){
        //textOn.current.innerHTML="";
        textOff.current.innerHTML=textOfMode;
      }else {
        //textOff.current.innerHTML="";
        textOn.current.innerHTML=textOnMode;
      }
    }
  },[textOfMode,textOnMode])
  
  React.useEffect(()=>{
    if(mode===1){
      if(switcher===false){
        //textOn.current.innerHTML="";
        textOff.current.innerHTML=textOfMode;
      }else {
        //textOff.current.innerHTML="";
        textOn.current.innerHTML=textOnMode;
      }
    }
  },[switcher]);

  return (
    <div className="App">
      {mode===0?
      <div className="buttonBox">
      {switcher===false?
      <div className='pattern' id="offMode" style={{width:"30%"}}>
        <div className="button" ></div>
        <div className='switchZone' onClick={handleToggle} style={{width:"60%"}} ></div>
      </div>
        :
      <div className='pattern' id="onMode" style={{width:"30%"}}>
        <div className='switchZone' onClick={handleToggle} style={{width:"60%"}}>
        </div>
        <div className='button'>
        </div>
      </div>
         }
      </div>
      :
      <div className="buttonBox">
        {switcher===false?
        <div className='pattern' id="offMode" ref={pattern} style={{}}>
          <div className="button" style={{width:"50px"}}></div> 
          <div className='switchZone' onClick={handleToggle} ref={textOff} style={{minWidth:"80px"}}></div>
        </div>
          :
        <div className='pattern' id="onMode" ref={pattern} style={{}}>
          <div className='switchZone' onClick={handleToggle} ref={textOn} style={{minWidth:"80px"}}>
          </div>
          <div className='button'  style={{width:"50px"}}>
          </div>
        </div>
           }
        </div>
      }
       <div id="optionBox">
        <div id="modeBox">
        <input className="mode" type={'radio'} name="mode"  onClick={handleChangeMode} ></input>
        <b>Basic toggle button</b>
        </div>
        <div>
        <input className="mode" type={'radio'} name="mode" onClick={handleChangeMode}></input>
        <b>Custom toggle button</b>
        </div>   
        {mode===1&&
        <div>
          
          {
            switcher===false?
            <>
            <div>
            Text for off mode
            <input type={"text"} style={{marginLeft:"5.5%"}} onChange={handleChangeTextOffMode} ></input>
          </div>
          <div>
          Text for on mode
          <input type={"text"} style={{marginLeft:"5.5%"}} onChange={handleChangeTextOnMode} disabled ></input>
        </div>
        </>
          :
          <>
           <div>
            Text for off mode
            <input type={"text"} style={{marginLeft:"5.5%"}} onChange={handleChangeTextOffMode} disabled ></input>
          </div>
          <div>
          Text for on mode
          <input type={"text"} style={{marginLeft:"5.5%"}} onChange={handleChangeTextOnMode } ></input>
        </div>
          </>
          }
        </div>}
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
