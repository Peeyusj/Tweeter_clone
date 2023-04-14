import React,{useEffect,useRef, useState} from 'react'
import '../styles/home.css'
const Home = () => {

  const[Links,SetLinks]=useState([])
  const[newtweet,setNewTweet]=useState("")
  let drop=useRef(null)

  let styleHandler=(id)=>{
  
    document.getElementById(id).style.visibility='visible'
    document.getElementById(id).style.pointerEvents='auto'
   
  }
  let outHandler=(id)=>{
    document.getElementById(id).style.visibility='hidden'
    document.getElementById(id).style.pointerEvents='none'

  }
  let delHandler=(id)=>{
        SetLinks(Links.filter((item)=>id!==item.id))
  }
  let submit=(e)=>{
    e.preventDefault()
    if(e.target.children[0].children[1].value===""){
      alert("Add some text or content to your tweet")
      return
    }
   
       let data={
          id:Math.random().toString(),
          tweet:newtweet
      }
      SetLinks([...Links,data])
      setNewTweet("")
    ;}
  
  return (
    <>
    <form className="form" onSubmit={submit} >
      <div>
      <div className='nameflx' style={{position:'absolute'}}><img src="https://avatars.githubusercontent.com/u/110000004?v=4" alt=""/>@Peeyush_rai</div>  
      <textarea  type="text" value={newtweet} onChange={(e)=>setNewTweet(e.target.value)} placeholder="What's happening?" />
      <button className='twtbt'  >Tweet</button>
      </div>
     </form>
    {
      Links.map((data)=> <div className='main1'>
        <div className="articles">
          <div className="username" style={{fontWeight:"bolder"}}><img src="https://avatars.githubusercontent.com/u/110000004?v=4" alt=""/>@Peeyush_rai</div>  
          <div className='drop' onMouseLeave={()=>outHandler(data.id)} onClick={()=>styleHandler(data.id)} ><img className='dropimg'  src="./images/more1.png" alt="" />
          <div className="dropmenu"  id={data.id}>
            {/* <div>Edit</div> */}
            <div onClick={()=>delHandler(data.id)}>Delete</div>
          </div>
          </div>
          <div className="tweer">{data.tweet}</div>
      </div>
    </div>)
    }
      
    </>
     
     
     
     
     )
    }

export default Home

    //   let tweet=useRef("")
    //   useEffect(()=>{
    //     let fetchdata=async()=>{
    //    let response= await fetch("http://localhost:3007/tweetdata")
    //    let data=await response.json()
    //    SetLinks(data);
    //     }
    //     fetchdata()
    //   },[])
    
    //   let submit=(e)=>{
    //     let data={
    //         tweet:tweet.current.value,
    //     }
    //     fetch("http://localhost:3007/tweetdata",{method:'Post',headers:{"Content-Type":'application/json'},body:JSON.stringify(data)})    
    // }