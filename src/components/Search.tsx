import '../styles/search.css'

export type ISearchProps = {

}

export default function Search(props: ISearchProps) {
  return (
    <div className="search-wp">
      <input type="text" className="search" placeholder='Search...' />
    </div>
  )
}