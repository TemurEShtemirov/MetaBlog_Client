import React from 'react';
import Banner from '../../assets/bannner.png';
import Posts from '../../assets/ posts/posts.json';
import Author from '../../assets/profile.png';
import './Home.scss';

export default function Home() {
    return (
        <div className="container mt-5">
            <main>
                <section className="section1">
                    <img className="banner" src={Banner} alt="Banner" />
                    <div className="card">
                        <span className="hashtag text-light">Technology</span>
                        <p className="title">
                            The Impact of Technology on the Workplace: How Technology is Changing
                        </p>
                        <div className="profile">
                            <img className="profile_img" src={Author} alt="Author" />
                            <p className="name">Jason Francisco</p>
                            <p className="date">August 20, 2022</p>
                        </div>
                    </div>
                </section>
                <div className="ad">
                    <div className="ad_container">
                        <p className="ad_name">Advertisement</p>
                        <p className="ad_title">You can place ads</p>
                        <p className="ad_size">750x100</p>
                    </div>
                </div>
                <section className="section2">
                    <div className="row">
                        {Posts.map((post) => (
                            <div className="card m-3 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4" style={{ width: '18rem' }} key={post.id}>
                                <a href="#" className="post_hashtag">
                                    {post.hashtags}
                                </a>

                                <img src={post.image} className="card-img-top mt-3" alt={post.image} />
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <div className="author">
                                        <img src={post.author.image} alt={post.author.image}/>
                                        <p className="card-text">
                                            {post.author.name} {post.author.lastName} At: {post.date}
                                        </p>
                                    </div>


                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <div className="row_viewall_posts justify-content-center align-content-center">
                    <button className="btn btn-outline-primary" style={{
                        marginLeft:"550px"
                    }}>View All</button>
                </div>
                <div className="ad">
                    <div className="ad_container">
                        <p className="ad_name">Advertisement</p>
                        <p className="ad_title">You can place ads</p>
                        <p className="ad_size">750x100</p>
                    </div>
                </div>
            </main>
        </div>
    );
}