import React, {useState, useEffect} from 'react'

const loadEmployees = setEmployees => () => {
  fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then(response => response.json())
    .then(({data}) => setEmployees(data));
}

const getCard = ( e, i ) => (
  <div className="card-content" key={i}>
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">{e.employee_name}</p>
        <p className="subtitle is-6">Salary: ${Number(e.employee_salary).toLocaleString('en')}</p>
      </div>
    </div>
  </div>
)

const Employees = () => {
  const [employees, setEmployees] = useState([])
  useEffect(loadEmployees(setEmployees), [])
  return <section className="section">
    <div className="container">
      <h2 className="title"> Employee List </h2>
      <ul>
        {employees.map( (e, i) => getCard(e, i))}
      </ul>
    </div>
  </section>
}

export default Employees
