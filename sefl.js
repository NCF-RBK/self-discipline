let creat=document.getElementById('create');
let mage=document.getElementById('mage')
let red=document.getElementById('red');
let blue=document.getElementById('blue')
let image=document.getElementById('imaage')


let pic='';
// Get the selected file
function getFileInputValue() {
    
    var selectedFile = mage.files[0];
    if (selectedFile) {
      pic = selectedFile.name;
    }
  }
  //show div OF STUDENT
function show(){
 

$(".output").append(` <div class="student">
<img src="Pin-PNG-Images.webp" id="pines">
<img src="${pic}" alt="" id="imaage">
<p>${$('#name').val()}</p>
<p>${$('#phase').val()}</p>
<h3>STUDENT</h3>
<button id="red" onclick="incrementRed(this)">red pins</button> <small id="redpin">0</small>
<button id="blue" onclick="incrementBlue(this)">blue pins</button><small id="bluepin">0</small>
<button id="remove" onclick="removeDiv(this)">remove</button>
</div>
`)

$('#name').val('');
$('#phase').val('');
}


//increment blue and red pins
function incrementRed(btn) {
    let redCount = parseInt($(btn).next("#redpin").text());
    redCount++;
    $(btn).next("#redpin").text(redCount);
  }
  
  function incrementBlue(btn) {
    let blueCount = parseInt($(btn).next("#bluepin").text());
    blueCount++;
    $(btn).next("#bluepin").text(blueCount);
  }
// Remove the parent div of the clicked button
  function removeDiv(btn) {
    
    $(btn).parent('.student').remove();
  }



