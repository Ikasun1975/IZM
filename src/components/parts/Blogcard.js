import React from "react";
import { Link } from "react-router-dom";
import Img from "../parts/Img";

const Blogcard = ({item,key,column="col-md-3"}) => {




    return(
        <div className={column}>
                            <div className="blog-card">
                                <Link className="blog-img" to={'/blog/' + item.slug}>                                
                                    {/*<img src={item?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium_large?.source_url} />*/}
                                    <Img

                                        src={item?._embedded?.["wp:featuredmedia"]?.[0]?.media_details}

                                        size='medium_large'

                                        alt={'Istaknuta slika za članak: ' + item.title.rendered}

                                    />
                                </Link>
                                <Link to={'/blog/' + item.slug}> 
                                    <h1>{item.title.rendered}</h1>
                                </Link>
                            </div>
                        </div>
    );
};

export default Blogcard;