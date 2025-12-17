function Card() {
  return (
    <>
      <img 
        className={`object-cover rounded-full`}
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&amp;fit=crop&amp;q=80&amp;w=1160" 
        alt={`Artist`} 
        style={{ width: 200, height: 200 }}
      />
      <p>Name</p>
      <p>Artist</p>
    </>
  )
}

export default Card
