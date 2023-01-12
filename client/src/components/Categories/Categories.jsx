
import React from 'react'
import './Categories.scss'
import {Link} from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/1390600/pexels-photo-1390600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className="link" to="/products/1" >Sale</Link>
                </button>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link' to="/products/2">
                        Jeans
                    </Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/3672825/pexels-photo-3672825.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <button>
                    <Link className='link' to="/products/3">
                        Shirts
                    </Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/2887767/pexels-photo-2887767.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <button>
                    <Link className='link' to="/products/4">
                        Jacket
                    </Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <button>
                    <Link className='link' to="/products/5">
                        Joggers
                    </Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/1850570/pexels-photo-1850570.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <button>
                    <Link className='link' to="/products/6">
                        Shoes
                    </Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories