    
        
        let btn = document.getElementById("buton")
        let remove = document.getElementById("rmv")
        let ul  = document.getElementById("demo")
        let specific=document.getElementById("spec")
        const data=[];
        btn.addEventListener('click',function add(){
            txt=document.getElementById("input").value
            data.splice(0,0,txt);
            console.log(data);
            let list = document.createElement("li")  
            list.innerHTML=data.at(0);
            ul.appendChild(list)
            let deleteButton = document.createElement("button");
                deleteButton.innerHTML = "Delete"
                list.appendChild(deleteButton)
                deleteButton.addEventListener('click',function sdelt(){
                       list.remove()
                //        data.remove()
                //        console.log(data)
                       
                       
                        
                       
                        // data.pop()
                        // e.parentElement.removeChild(e)
                        // // const Tom = document.getElementById("demo")
                        // console.log(data)
                })
        

                
      
        }) 
                remove.addEventListener('click',function remve(){
                data.splice(0,data.length)
                console.log(data)
                // let list = document.createElement("li")
                ul.innerHTML='';
                // ul.appendChild(list)
        })
                specific.addEventListener('click',function specific(){
                // const Tom = document.getElementById("demo")
                const e = document.querySelector("li:last-child");
                data.pop()
                e.parentElement.removeChild(e)
                // const Tom = document.getElementById("demo")
                console.log(data)
                
        } )
//        btn.addEventListener('click',function delet(){
//                 let btnse = document.createElement("button")
//                 txt = "DELETE";
//                 function delte(){

//                 }
//                 btnse.innerHTML=txt;
//                 ul.appendChild(btnse)
//        })
//        btn.addEventListener('click ' , function dintiy(){
//                         let deltee=document.getElementById("demo")
//                         txty=deltee.remove()
//                         deltee.innerHTML=txty
//                         ul.appendChild(deltee)
//        })




 