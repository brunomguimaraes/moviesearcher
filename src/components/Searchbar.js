import React from 'react'

const Searchbar = () => {
    return (

        <div>
          <p>
          <input className = 'searchBar' onChange={this.searchHandler.bind(this)} placeholder='Busque um filme por nome, ano ou gênero...'/>
          </p>
        </div>

        
    )
}

export default Searchbar