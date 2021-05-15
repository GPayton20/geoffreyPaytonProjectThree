const ListItem = ( {title, author} ) => {
  return (
    <li key={title}>
      <p className="title">{title}</p>
      <p className="author">by {author}</p>
    </li>
  )
}

export default ListItem;