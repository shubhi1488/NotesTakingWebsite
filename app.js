showNotes();
//If user adds a note add it to the local storage
let addBtn=document.getElementById('addBtn');
addBtn.addEventListener("click",function(e){
    let addTxt=document.getElementById('addTxt');
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    // console.log(notesObj);
    showNotes();
})
function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index){
        html+=`
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;border:2px solid black;background-color:cornflowerblue;">
                
                <div class="card-body" >
                  <h5 class="card-title" style="font-family:cursive;font-size:25px;color:red;margin-left:55px;font-weight:bold;">Note ${index+1}</h5>
                  <hr>
                  <p class="card-text" style="font-family:cursive;">${element}</p>
                  <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary" style="font-family:cursive;background-color:red;margin-left:35px;">Delete Note</button>
                </div>
              </div>
        `});
        let notesElm=document.getElementById('notes');
        if(notesObj.length!=0){
            notesElm.innerHTML=html;
        }
        else{
            notesElm.innerHTML=`Nothing to show! use "Add a note" to add note.`;
        }


    }
    //function to delete notes-
    function deleteNote(index){
        // console.log("I am deleting",index);
        let notes=localStorage.getItem("notes");
        if(notes==null){
            notesObj=[];
        }
        else{
            notesObj=JSON.parse(notes);
        }
        notesObj.splice(index,1);
        localStorage.setItem("notes",JSON.stringify(notesObj));
        showNotes();
        
        

    }
    let search=document.getElementById('searchTxt');
    search.addEventListener("input",function(){
        let inputVal=search.value.toLowerCase();
        // console.log("input event fired",inputVal);
        let noteCards=document.getElementsByClassName('noteCard');
        Array.from(noteCards).forEach(function(element){
            let cardTxt=element.getElementsByTagName("p")[0].innerText;
            // console.log(cardTxt);
            if(cardTxt.includes(inputVal)){
                element.style.display="block";
            }
            else{
                element.style.display="none";
            }

        })
    })
