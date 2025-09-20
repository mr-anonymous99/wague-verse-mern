import React from 'react'
import Blog from './Blog'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const Home = () => {
    const blogs = [{
        id: 1,
        img: "./maxii.jpg",
        trending:"trending",
        profile: "./ver.jpg",
        name: "max verstappen",
        timeofpost: "5 hours ago",
        leftTime: "3 min ago",
        title:"max verstappen",
        description: "He is great f1 racer renowned for his sppedn and the victories that he is made in teh entire f1 series , he is the one who can able to manage the longest record ever made that it was a good thing to knwo about him",
        readTime: "5 min read",
    }, {
        id: 2,
        img: "./maxii.jpg",
        trending:"trending",
        profile: "./ver.jpg",
        name: "max verstappen",
        timeofpost: "5 hours ago",
        leftTime: "3 min ago",
        title:"max verstappen",
        description: "He is great f1 racer renowned for his sppedn and the victories that he is made in teh entire f1 series , he is the one who can able to manage the longest record ever made that it was a good thing to knwo about him",
        readTime: "5 min read",
    }, {
        id: 3,
        img: "./maxii.jpg",
        trending:"trending",
        profile: "./ver.jpg",
        name: "max verstappen",
        timeofpost: "5 hours ago",
        leftTime: "3 min ago",
        title:"max verstappen",
        description: "He is great f1 racer renowned for his sppedn and the victories that he is made in teh entire f1 series , he is the one who can able to manage the longest record ever made that it was a good thing to knwo about him",
        readTime: "5 min read",
    }, {
        id: 4,
        img: "./maxii.jpg",
        trending:"trending",
        profile: "./ver.jpg",
        name: "max verstappen",
        timeofpost: "5 hours ago",
        leftTime: "3 min ago",
        title:"max verstappen",
        description: "He is great f1 racer renowned for his sppedn and the victories that he is made in teh entire f1 series , he is the one who can able to manage the longest record ever made that it was a good thing to knwo about him",
        readTime: "5 min read",
    }, {
        id: 5,
        img: "./maxii.jpg",
        trending:"trending",
        profile: "./ver.jpg",
        name: "max verstappen",
        timeofpost: "5 hours ago",
        leftTime: "3 min ago",
        title:"max verstappen",
        description: "He is great f1 racer renowned for his sppedn and the victories that he is made in teh entire f1 series , he is the one who can able to manage the longest record ever made that it was a good thing to knwo about him",
        readTime: "5 min read",
    },
{
        id: 6,
        img: "./maxii.jpg",
        trending:"trending",
        profile: "./ver.jpg",
        name: "max verstappen",
        timeofpost: "5 hours ago",
        leftTime: "3 min ago",
        title:"max verstappen",
        description: "He is great f1 racer renowned for his sppedn and the victories that he is made in teh entire f1 series , he is the one who can able to manage the longest record ever made that it was a good thing to knwo about him",
        readTime: "5 min read",
    }]
    return (
        <div className='min-w-screen flex flex-col items-center justify-center'>
            <NavBar/>
            <div className='flex flex-col items-center justify-center gap-4 '>
                <h1 className='font-bold text-3xl mt-7'>Welcome to Wague-verse</h1>
                <p className='text-gray-500'>Discover amazing stories ,insights and ideas from our communinty of <br />writers. <Link to="/signin" className='text-blue-500'> Sign in</Link> to create your own posts and save you favourites</p>
            </div>
            <div className='grid grid-cols-3 mt-6 gap-3 px-14 '>
                    {blogs.map((b) => (
                        <Blog b={b} key={b.id}/>
                    ))}
            </div>
        </div>

    )
}

export default Home