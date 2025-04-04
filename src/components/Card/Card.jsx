

const Card = (props) => {
    const { forcast } = props
    return (
        <div className='card'>
            <h2>{forcast.day}</h2>
            <img src={forcast.img} alt={forcast.imgAlt} />
            <p><strong>Condition: </strong>{forcast.conditions}</p>
            <p><strong>Time: </strong>{forcast.time}</p>
        </div>
    )
}

export default Card