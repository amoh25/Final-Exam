function toggledark(){
  togglebtn = document.getElementsByClassName('toggle');
  togglebtn.addEventListener('change',()=>{
    const dark = document.body;
    dark.classList.toggle('dark')
  }
)

}
submitbtn = document.getElementById('frm-btn')
submitbtn.addEventListener('click', function(i){
    i.preventdefault()
    console.log(getElementById('name').value,getElementById('email').value,getElementById('msg').value)
})