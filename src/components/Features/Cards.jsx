import Card from "./Card";
import { data } from "./data";

export default function Cards() {
  return (
    <div className="cards grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((data, index) => {
            return (
                <Card key={index} icon={data.icon} title={data.title} text={data.text}/>
            )
        })}
    </div>
  )
}
