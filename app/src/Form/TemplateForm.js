import React from 'react'


class TemplateForm extends React.Component{
    constructor(){
        super();
    
        this.state = {fName: '', lName: '', pet: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleInsertUser = this.handleInsertUser.bind(this);
    }

handleChange(event){
  this.setState({[event.target.name]: event.target.value})
}

handleInsertUser = async (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state))
    let response = await fetch('form.api.com/api/post/user',{
      method:'POST',
      headers: {'Content-Type': 'application/json;charset=utf-8'},
      body: JSON.stringify(this.state)
    })

    let result = await response.json();
    console.log(result);

}

  render(){
      return(
          <form className="form__form" onSubmit={this.handleInsertUser}>
              <div className="form__panel shadow rounded bg-white js-active" data-animation="scaleIn">
                <h3 className="form__title">User Info</h3>
                <div className="form__content">
                  <div className="form-row mt-4">
                    <div className="">
                      <input className="form__input form-control" name="fName" type="text" value={this.state.fName} onChange={this.handleChange.bind(this)} placeholder="First Name"/>
                    </div>
                    <div className="">
                      <input className="form__input form-control" name="lName" type="text" value={this.state.lName} onChange={this.handleChange.bind(this)} placeholder="Last Name"/>
                    </div>
                  </div>
                  <div className="">
                    <button className="js-btn-next" type="button" title="Next">Next</button>
                  </div>
                </div>
              </div>
              
              <div className="form__panel shadow  rounded bg-white js-active" data-animation="scaleIn">
                <h3 className="form__title">Your favorite pet</h3>
                <select name="pet" value={this.state.pet} onChange={this.handleChange.bind(this)}>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="humster">Humster</option>
                </select>
              </div>
              <input type="submit" value="Send"/>
          </form>
    )
  }
}


export default TemplateForm;
