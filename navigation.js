window.alert("You're welcome. It's a safe wall here");
const skillBtn= document.querySelector('.skill-btn');
const skills= document.querySelectorAll('.skills');


  skillBtn.addEventListener('click', function(){
    for (let i=0; i< skills.length;i++)
    skills[i].classList.remove('skills');
    skillBtn.style.display='none'; 
  })  
   