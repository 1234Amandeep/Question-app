//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', (e) => {
    questions.forEach(item => {
      if(item !== e.currentTarget.parentElement.parentElement)
      {
        item.classList.remove('show-text')
      }
    })




    question.classList.toggle('show-text')
  })


})



















// traversing the dom

// const btns = Array.from(document.querySelectorAll('.question-btn'));

// btns.forEach(btn => {
//   btn.addEventListener('click', (e) => {
//     const desiredNode = e.currentTarget.parentElement.parentElement;

//     // if(desiredNode.classList.contains('show-text'))    
//     // {
//     //   desiredNode.classList.remove('show-text');
//     // }else{
//     // desiredNode.classList.add('show-text');}

//     desiredNode.classList.toggle('show-text');    
//   })
// })