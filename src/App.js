import './App.css';


  const customers = [
    {id:1,name:"Janusz"},
    {id:2,name:"Krzysztof"},
    {id:3,name:"Piper"},
    {id:4,name:"Michael"},
  ]

function App() {


  return (
    <>
      <table>
        <tr>
          <th>Id</th>
          <th>Imie</th>
        </tr>
        {customers.map((customer)=><tr key={customer.id}><td>{customer.id}</td><td>{customer.name}</td></tr>)}
      </table>
    </>
  );
}

export default App;
