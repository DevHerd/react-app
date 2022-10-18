const Card = props => {
  const { children, className  } = props;

  return(
        <div className={className}>
            {children}
        </div>
  )
}

export default Card;