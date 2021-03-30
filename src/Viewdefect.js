import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Route } from "react-router-dom";

export default class Viewdefects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defects:this.props.defects,
      priority: "All",
      category: "All"
    };
  }
  handleChange = ({ target: { name, value } }) => {
    console.log(name + " " + value);
    var defects = [...this.props.defects];
    if (name === "priority") {
      if (value !== "All") {
        if (this.state.category === "All") {
          defects = defects.filter(defect => {
            if (defect.priority == value) {
              console.log("defect priority is:" + defect.priority);
              return defect;
            }
          });
        } else {
          defects = defects.filter(defect => {
            if (
              defect.priority == value &&
              this.state.category == defect.category
            ) {
              console.log("defect priority is:" + defect.priority);
              return defect;
            }
          });
        }
      } else {
        if (this.state.category !== "All") {
          defects = defects.filter(defect => {
            if (this.state.category == defect.category) {
              console.log("defect priority is:" + defect.priority);
              return defect;
            }
          });
        }
      }
    } else if (name === "category") {
      if (value !== "All") {
        if (this.state.priority === "All") {
          defects = defects.filter(defect => {
            if (defect.category == value) {
              console.log("defect category is:" + defect.category);
              return defect;
            }
          });
        } else {
          defects = defects.filter(defect => {
            if (
              defect.category == value &&
              this.state.priority == defect.priority
            ) {
              console.log("defect category is:" + defect.category);
              return defect;
            }
          });
        }
      } else {
        if (this.state.priority !== "All") {
          defects = defects.filter(defect => {
            if (this.state.priority == defect.priority) {
              console.log("defect category is:" + defect.category);
              return defect;
            }
          });
        }
      }
    }

    this.setState({ [name]: value,defects });
    console.log(this.state);
  };
  getdata = () => {
    let arr = [...this.props.defects];
    return arr;
  };

  render() {
    console.log(this.getdata());
    let defects = [...this.state.defects];
    console.log(defects);
    let defect = defects.map((defect, ind) => {
      return (
        <>
          <tr key={`ABC${ind}`}>
            {console.log(ind)}
            <td>{defect.category}</td>
            <td>{defect.description}</td>
            <td>{defect.priority}</td>
            <td>{defect.status}</td>
            <td>
              <button
                onClick={() => {
                  console.log({ ind });
                  console.log(defect.status);
                  defect.status = "closed";
                  defects[ind] = defect;
                  console.log(defects);
                  this.setState(defects);
                }}
              >
                {defect.changeStatus}
              </button>
            </td>
          </tr>
        </>
      );
    });
    return (
      <>
        <div className="container-fluid border mt-2" key="abc2">
          <h4 className="text-center my-3">Filter Details</h4>
          <div className="text-center">
            <label className="pr-2 my-2">Priority</label>
            <select
              name="priority"
              id="priority"
              value={this.state.priority}
              onChange={this.handleChange}
            >
              <option value="All">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="text-center" key="abc3">
            <label className="pr-2 my-2">Category</label>
            <select
              name="category"
              id="category"
              value={this.state.category}
              onChange={this.handleChange}
            >
              <option value="All">All</option>
              <option value="UI">UI</option>
              <option value="Functional">Functional</option>
              <option value="ChangeRequest">ChangeRequest</option>
            </select>
          </div>
        </div>
        <div className="container-fluid mt-2" key="abc4">
          <h3 className="text-center">Defects</h3>
          <table className="table-border1 my-3">
            <thead className="thead-dark">
              <tr>
                <th>Defect Category</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Status</th>
                <th>ChangeStatus</th>
              </tr>
            </thead>
            <tbody>{defect}</tbody>
          </table>
        </div>
      </>
    );
  }
}
