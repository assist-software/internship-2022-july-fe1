import { useGlobalContext } from "../../Context/appContext";

function HomePage() {
  const {data} = useGlobalContext()

  console.log(data)
  return (
    <div>
      <h1>This is home page (good luck)</h1>

      {data.map((item)=>{
       return <div key={item.id}>
          <h2>{item.name}</h2>
          <h4>{item.description}</h4>
          <h4>{item.location}</h4>
          <h4>{item.priceg}</h4>
       </div>
      })}
    </div>
  )
}

export default HomePage;