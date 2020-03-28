

document.addEventListener('DOMContentLoaded', function(){
  class Form{
      constructor(form, parts){
        this.form = form;
        this.parts = parts;
      }

      letsAnimate(){}
  }
});

const stepListener = () => {
  const stepsButton = document.querySelectorAll("name[steps]");
  console.log(stepsButton);
};

stepListener();

export default Form;