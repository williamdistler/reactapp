import './styles.css'

// props -> acessa o parâmetro props.xxxx
// {xxxx, yyyy} -> destructuring das props
export function Card({ name, time }) {
  return (
    <div className="card">
      <strong>{name}</strong>
      <small>{time}</small>
    </div>
  )
}