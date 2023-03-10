import React from 'react'
import './Bestdeals.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
function Bestdeals() {
    return (
        <>
            <div className='bestdeals'>
                <div className='bestdeals-head'>
                    <h2 className='pe-5'>Best Deals</h2>
                </div>
                <div className='bestdeals-view'>
                    <Button>View All</Button>
                </div>
            </div>
          
            <div className='bestdeals-content'>

          
                <div className='bestdeals-sub'>

                
                <div className='newdesign'>
                  <img src="/products/1674286541.jpg" alt=""></img>
                    <p style={{fontWeight:' 600',fontSize:'1.125rem',marginBottom:'0.5rem'}}>Vonmahlen All in one cable - White</p>
                    <p style={{fontSize:'1.375rem',marginBottom:"4px",color:"#f5831a"}} class="  ">149.900 KD</p>
                    <div class="font-body"><span style={{MarginBottom: '4px'}} class=" ">204.900 KD</span>  <span class=""  style={{background: '#f5831a',padding:'3px 3px',fontSize:"12px",color:"white"}}>27%</span></div>
                     <Button className='w-100 newbtn'>Add To Cart</Button>
             </div>
             <div className='newdesign'>
                  <img src="/products/1674286541.jpg" alt=""></img>
                    <p style={{fontWeight:' 600',fontSize:'1.125rem',marginBottom:'0.5rem'}}>Vonmahlen All in one cable - White</p>
                    <p style={{fontSize:'1.375rem',marginBottom:"4px",color:"#f5831a"}} class="  ">149.900 KD</p>
                    <div class="font-body"><span style={{MarginBottom: '4px'}} class=" ">204.900 KD</span>  <span class=""  style={{background: '#f5831a',padding:'3px 3px',fontSize:"12px",color:"white"}}>27%</span></div>
                     <Button className='w-100 newbtn'>Add To Cart</Button>
             </div>
             <div className='newdesign'>
                  <img src="/products/1674286541.jpg" alt=""></img>
                    <p style={{fontWeight:' 600',fontSize:'1.125rem',marginBottom:'0.5rem'}}>Vonmahlen All in one cable - White</p>
                    <p style={{fontSize:'1.375rem',marginBottom:"4px",color:"#f5831a"}} class="  ">149.900 KD</p>
                    <div class="font-body"><span style={{MarginBottom: '4px'}} class=" ">204.900 KD</span>  <span class=""  style={{background: '#f5831a',padding:'3px 3px',fontSize:"12px",color:"white"}}>27%</span></div>
                     <Button className='w-100 newbtn'>Add To Cart</Button>
             </div>
             <div className='newdesign'>
                  <img src="/products/1674286541.jpg" alt=""></img>
                    <p style={{fontWeight:' 600',fontSize:'1.125rem',marginBottom:'0.5rem'}}>Vonmahlen All in one cable - White</p>
                    <p style={{fontSize:'1.375rem',marginBottom:"4px",color:"#f5831a"}} class="  ">149.900 KD</p>
                    <div class="font-body"><span style={{MarginBottom: '4px'}} class=" ">204.900 KD</span>  <span class=""  style={{background: '#f5831a',padding:'3px 3px',fontSize:"12px",color:"white"}}>27%</span></div>
                     <Button className='w-100 newbtn'>Add To Cart</Button>
             </div>
             <div className='newdesign'>
                  <img src="/products/1674286541.jpg" alt=""></img>
                    <p style={{fontWeight:' 600',fontSize:'1.125rem',marginBottom:'0.5rem'}}>Vonmahlen All in one cable - White</p>
                    <p style={{fontSize:'1.375rem',marginBottom:"4px",color:"#f5831a"}} class="  ">149.900 KD</p>
                    <div class="font-body"><span style={{MarginBottom: '4px',textDecoration:"line-through"}} class=" ">204.900 KD</span>  <span class=""  style={{background: '#f5831a',padding:'3px 3px',fontSize:"12px",color:"white"}}>27%</span></div>
                     <Button className='w-100 newbtn'>Add To Cart</Button>
             </div>





{/* 

                  <div className='bestdeals-card'>
                        <div className="bestdealshead">
                            <div className='star'>
                                <StarOutlinedIcon variant="filled" sx={{ fontSize: '20px', color: '#f5831a' }} />
                                4.2
                            </div>
                            <div className='whishlist'>
                                <FavoriteBorderOutlinedIcon variant="outlined" sx={{ fontSize: '20px', color: '#d5d5d5' }} />
                            </div> </div>
                        <img src="/products/1674284978.jpg" alt=""></img>
                        <p>Vonmahlen All in one cable - White</p>
                        <hr style={{ margin: '0px 5px' }}></hr>
                        <div className='cardbottom'>
                            <div className='price'>
                                <p className='error'>KWD 52.00</p>
                                <p className='real'>KWD 42.00</p>
                            </div>
                            <div className='addtocart'>
                                <ShoppingCartOutlinedIcon variant="outlined" />
                            </div>
                        </div>
                    </div>





                    <div className='bestdeals-card'>
                        <div className="bestdealshead">
                            <div className='star'>
                                <StarOutlinedIcon variant="filled" sx={{ fontSize: '20px', color: '#f5831a' }} />
                                4.2
                            </div>
                            <div className='whishlist'>
                                <FavoriteBorderOutlinedIcon variant="outlined" sx={{ fontSize: '20px', color: '#d5d5d5' }} />
                            </div> </div>
                        <img src="/products/1674286541.jpg" alt=""></img>
                        <p>Vonmahlen All in one cable - White</p>
                        <hr style={{ margin: '0px 5px' }}></hr>
                        <div className='cardbottom'>
                            <div className='price'>
                                <p className='error'>KWD 52.00</p>
                                <p className='real'>KWD 42.00</p>
                            </div>
                            <div className='addtocart'>
                                <ShoppingCartOutlinedIcon variant="outlined" />
                            </div>
                        </div>
                    </div>

                    <div className='bestdeals-card'>
                        <div className="bestdealshead">
                            <div className='star'>
                                <StarOutlinedIcon variant="filled" sx={{ fontSize: '20px', color: '#f5831a' }} />
                                4.2
                            </div>
                            <div className='whishlist'>
                                <FavoriteBorderOutlinedIcon variant="outlined" sx={{ fontSize: '20px', color: '#d5d5d5' }} />
                            </div> </div>
                        <img src="/products/1674291343.jpg" alt=""></img>
                        <p>Vonmahlen All in one cable - White</p>
                        <hr style={{ margin: '0px 5px' }}></hr>
                        <div className='cardbottom'>
                            <div className='price'>
                                <p className='error'>KWD 52.00</p>
                                <p className='real'>KWD 42.00</p>
                            </div>
                            <div className='addtocart'>
                                <ShoppingCartOutlinedIcon variant="outlined" />
                            </div>
                        </div>
                    </div>
                    <div className='bestdeals-card'>
                        <div className="bestdealshead">
                            <div className='star'>
                                <StarOutlinedIcon variant="filled" sx={{ fontSize: '20px', color: '#f5831a' }} />
                                4.2
                            </div>
                            <div className='whishlist'>
                                <FavoriteBorderOutlinedIcon variant="outlined" sx={{ fontSize: '20px', color: '#d5d5d5' }} />
                            </div> </div>
                        <img src="/products/1678006649.jpg" alt=""></img>
                        <p>Vonmahlen All in one cable - White</p>
                        <hr style={{ margin: '0px 5px' }}></hr>
                        <div className='cardbottom'>
                            <div className='price'>
                                <p className='error'>KWD 52.00</p>
                                <p className='real'>KWD 42.00</p>
                            </div>
                            <div className='addtocart'>
                                <ShoppingCartOutlinedIcon variant="outlined" />
                            </div>
                        </div>
                    </div>
       
                    <div className='bestdeals-card'>
                        <div className="bestdealshead">
                            <div className='star'>
                                <StarOutlinedIcon variant="filled" sx={{ fontSize: '20px', color: '#f5831a' }} />
                                4.2
                            </div>
                            <div className='whishlist'>
                                <FavoriteBorderOutlinedIcon variant="outlined" sx={{ fontSize: '20px', color: '#d5d5d5' }} />
                            </div> </div>
                        <img src="/products/167429131015.jpg" alt=""></img>
                        <p>Vonmahlen All in one cable - White</p>
                        <hr style={{ margin: '0px 5px' }}></hr>
                        <div className='cardbottom'>
                            <div className='price'>
                                <p className='error'>KWD 52.00</p>
                                <p className='real'>KWD 42.00</p>
                            </div>
                            <div className='addtocart'>
                                <ShoppingCartOutlinedIcon variant="outlined" />
                            </div>
                        </div>
                    </div>
                    <div className='bestdeals-card'>
                        <div className="bestdealshead">
                            <div className='star'>
                                <StarOutlinedIcon variant="filled" sx={{ fontSize: '20px', color: '#f5831a' }} />
                                4.2
                            </div>
                            <div className='whishlist'>
                                <FavoriteBorderOutlinedIcon variant="outlined" sx={{ fontSize: '20px', color: '#d5d5d5' }} />
                            </div> </div>
                        <img src="/products/1674284730354.jpg" alt=""></img>
                        <p>Vonmahlen All in one cable - White</p>
                        <hr style={{ margin: '0px 5px' }}></hr>
                        <div className='cardbottom'>
                            <div className='price'>
                                <p className='error'>KWD 52.00</p>
                                <p className='real'>KWD 42.00</p>
                            </div>
                            <div className='addtocart'>
                                <ShoppingCartOutlinedIcon variant="outlined" />
                            </div>
                        </div>
                    </div>
                    <div className='bestdeals-card'>
                        <div className="bestdealshead">
                            <div className='star'>
                                <StarOutlinedIcon variant="filled" sx={{ fontSize: '20px', color: '#f5831a' }} />
                                4.2
                            </div>
                            <div className='whishlist'>
                                <FavoriteBorderOutlinedIcon variant="outlined" sx={{ fontSize: '20px', color: '#d5d5d5' }} />
                            </div> </div>
                        <img src="/products/1674284730354.jpg" alt=""></img>
                        <p>Vonmahlen All in one cable - White</p>
                        <hr style={{ margin: '0px 5px' }}></hr>
                        <div className='cardbottom'>
                            <div className='price'>
                                <p className='error'>KWD 52.00</p>
                                <p className='real'>KWD 42.00</p>
                            </div>
                            <div className='addtocart'>
                                <ShoppingCartOutlinedIcon variant="outlined" />
                            </div>
                        </div>
                    </div>
                    <div className='bestdeals-card'>
                        <div className="bestdealshead">
                            <div className='star'>
                                <StarOutlinedIcon variant="filled" sx={{ fontSize: '20px', color: '#f5831a' }} />
                                4.2
                            </div>
                            <div className='whishlist'>
                                <FavoriteBorderOutlinedIcon variant="outlined" sx={{ fontSize: '20px', color: '#d5d5d5' }} />
                            </div> </div>
                        <img src="/products/1674284730861.jpg" alt=""></img>
                        <p>Vonmahlen All in one cable - White</p>
                        <hr style={{ margin: '0px 5px' }}></hr>
                        <div className='cardbottom'>
                            <div className='price'>
                                <p className='error'>KWD 52.00</p>
                                <p className='real'>KWD 42.00</p>
                            </div>
                            <div className='addtocart'>
                                <ShoppingCartOutlinedIcon variant="outlined" />
                            </div>
                        </div>
                    </div> */}
                  


                </div>


            </div>
            <div className='bannerimage'>
            <img src="/homeslider/1659393213.jpeg" alt=""></img>
            </div>


        </>
    )
}

export default Bestdeals