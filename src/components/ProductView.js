import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux'
import productlist from '../action';
import { Link } from 'react-router-dom';


const ProductView = () => {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   const fetchPosts = async () => {
 //       const response = await fetch('https://fakestoreapi.com/products');
   //       const data = await response.json();
  //   };
 //   fetchPosts();
  // }, []);
// if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  // if (posts.length === 0) return <p>No posts found.</p>;
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(productlist())
  },[])
const {data}=useSelector(state=>state.productreducer)
  // console.log(data);
   return (
  <Row className='ms-4 '>
            {data.map(post => (
    <Col md={6} sm={6} lg={3} className='mt-5 '>
         <Card style={{ width: '18rem', height:'25rem' }} className=' bg-light pcard' >
        <div className='text-center mt-5'>
       <Card.Img variant="top" src={post.image} style={{width:'100px', height:'130px'}} /></div>
                    <Card.Body>
      <Card.Title>{post.title.slice(0,30)}</Card.Title>
      <Card.Text >
       <h3 className='price pt-2'>$ {post.price}</h3>
      </Card.Text>
       </Card.Body>
         <Card.Footer>
          <Link to={`/view/${post.id}`} >
         <Button variant="primary"className='p-2 buttonview' style={{borderRadius:'20px', width:'200px'}}>VIEW</Button>
         </Link>
         </Card.Footer>
        </Card>
        </Col>
         ))}
     
      </Row>
  
    );
  };
  

  export default ProductView;