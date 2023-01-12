
import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({type}) => {

  const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)



  return (
    <div className='featured'>
      <div className="top">
        <h1>{type} products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, itaque nemo! Iste voluptatem provident voluptatibus perspiciatis repudiandae corrupti?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni laboriosam ab, deleniti molestiae inventore eum dolorem placeat sapiente porro illo harum fuga! Mollitia, dignissimos est sequi dolorem eveniet unde id Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quas omnis soluta dicta expedita. Vel consectetur repellendus culpa fugiat minus nemo sapiente accusantium enim qui, voluptatem tenetur ullam perferendis voluptatibus.</p>
      </div>
      <div className="bottom">
        {error
        ? "Something went wrong!"
        : loading 
        ? "loading"
        : data?.map((item) => 
          <Card item={item} key={item.id} />
        )}
      </div>
    </div>
  )
}

export default FeaturedProducts