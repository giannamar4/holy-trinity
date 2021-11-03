function power(){
    let random = ((Math.floor(Math.random() * 1000)))
    alert(random)
    console.log(random)
   alert(Math.pow(random,2))
 console.log(Math.pow(random,2))
}
function sqrt(){
  
    let checker = false
    while(checker == false){
       let root=(Math.floor(Math.random()*Number.MAX_SAFE_INTEGER))
        if(Math.sqrt(root)%1==0){
            alert(root)
            console.log(root)
            alert(Math.sqrt(root))
            console.log(Math.sqrt(root))
            checker = true
        }
    }
}
function ball(){
let answer = ['yasss','no','maybe','trust your instinct','ask a friend'  ]
let x =Math.floor((Math.random()*4))
alert(answer[x])
console.log(answer[x])

}