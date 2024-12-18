function delay(ml){
    return new Promise(
        (resolve)=>{
          setTimeout(resolve, ml)  
        }
    )
}

async function Demo(){
    console.log("Hello")
    console.log("waiting ...")
    delay(2000).then(()=>{
        console.log("world")
    })
} 

Demo()

