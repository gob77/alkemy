function Card({ card }) {
    console.log(card);
    return (
        <div style={{ border: "1px solid black", margin: "20px", width: "calc(33% - 20px)" }}>
            <p>
                {card.name} / {card.biography["full-name"]}
            </p>

            <img src={card.image.url} alt="" style={{ maxWidth: "100%" }} />
            <p>{card.appearance.race === null ? "Unknown" : card.appearance.race}</p>
            <p>{card.appearance.height[1]}</p>
            <p>{card.appearance.weight[1]}</p>
        </div>
    );
}

export default Card;
