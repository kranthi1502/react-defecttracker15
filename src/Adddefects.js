import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Viewdefects from './Viewdefects'
export default class AddDefect extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "#",
      priority: "#",
      description: ""
    };
  }

  update = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.updateDefects(
      this.state.category,
      this.state.description,
      this.state.priority
    );
  };

  handleChange = ({ target: { name, value } }) => {
    // console.log(name + ":" + value);
    this.setState({ [name]: value });
  };
  render() {
    console.log(this.props);
    return (
      <>
        <div className="container-fluid adddefect-border my-3">
          <div className="text-center font-weight-bold">AddDefects</div>
          <div className="text-center">
            <label className="pr-2 my-2">Defect Category</label>
            <select name="category" id="category"
            value={this.state.category}
            onChange={this.handleChange}>
              <option value="#">Select</option>
              <option value="UI">UI</option>
              <option value="Functional">Functional</option>
              <option value="ChangeRequest">ChangeRequest</option>
            </select>
            <br />
            <label>Description</label>
            <textarea 
             name="description"
              value={this.state.description}
              onChange={this.handleChange}/>
            <br />
            <label className="pr-2 my-2">Priority</label>
            <select name="priority" id="priority"
            value={this.state.priority}
            onChange={this.handleChange}
            >
              <option value="#">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <br />
            <button className="my-2 btn btn-primary" type="submit" onClick={this.update}>
              Add Defect
            </button>
          </div>
        </div>
      </>
    );
  }
}
