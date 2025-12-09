const RatingStars = ({rating}: {rating: number}) => {
    return (
        <div className="flex flex-row gap-3 items-center">
            {'★'.repeat(Math.floor(rating))}
            {'☆'.repeat(5 - Math.floor(rating))}
            <span className="text-xs font-medium">({rating})</span>
        </div>
    )
}

export default RatingStars