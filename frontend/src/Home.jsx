import React from 'react'
import Blog from './Blog'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const Home = () => {
    const blogs = [
  {
    id: 1,
    img: "https://4kwallpapers.com/images/walls/thumbs_3t/14437.jpg",
    trending: "Battle Royale",
    profile: "./ver.jpg",
    name: "Call of Duty: Warzone",
    timeofpost: "5 hours ago",
    leftTime: "3 min ago",
    title: "Warzone - Tactical Battle Royale",
    description: "Call of Duty: Warzone is a fast-paced, tactical battle royale that drops players into intense firefights across large-scale maps. With a blend of realism and high-octane action, Warzone rewards precision, team strategy, and quick thinking. A favorite among competitive FPS fans.",
    readTime: "5 min read"
  },
  {
    id: 2,
    img: "https://4kwallpapers.com/images/walls/thumbs_3t/11129.png",
    trending: "TDM",
    profile: "./ver.jpg",
    name: "Counter-Strike 2",
    timeofpost: "5 hours ago",
    leftTime: "3 min ago",
    title: "Counter-Strike 2 - Precision Shooter",
    description: "Counter-Strike 2 elevates the legendary tactical shooter with upgraded visuals, refined gunplay, and smoother mechanics. It’s a game of clutch moments, team coordination, and split-second decisions. Perfect for players who thrive on skill-based, competitive FPS action.",
    readTime: "5 min read"
  },
  {
    id: 3,
  img: "https://4kwallpapers.com/images/walls/thumbs_3t/19112.png",
  trending: "iDK",
  profile: "./ver.jpg",
  name: "Valorant",
  timeofpost: "5 hours ago",
  leftTime: "3 min ago",
  title: "Valorant - Tactical Hero Shooter",
  description: "Valorant blends precise tactical gunplay with unique agent abilities to create a competitive experience unlike any other. Strategy, aim, and quick reflexes are key in this 5v5 shooter that has become a favorite in the esports world. this is a most wanted best espots game",
  readTime: "5 min read"
  },
  {
    id: 4,
    img: "https://4kwallpapers.com/images/walls/thumbs_3t/10885.jpg",
    trending: "Georgious",
    profile: "./ver.jpg",
    name: "Red Dead Redemption 2",
    timeofpost: "5 hours ago",
    leftTime: "3 min ago",
    title: "RDR2 - The Wild West Epic",
    description: "Red Dead Redemption 2 is a cinematic open-world masterpiece that tells a gripping story of loyalty, survival, and change in the dying days of the Wild West. With stunning visuals and rich storytelling, it’s more than a game—it’s an experience.",
    readTime: "5 min read"
  },
  {
    id: 5,
    img: "https://4kwallpapers.com/images/walls/thumbs_3t/12569.jpg",
    trending: "Waste",
    profile: "./ver.jpg",
    name: "Free Fire",
    timeofpost: "5 hours ago",
    leftTime: "3 min ago",
    title: "Free Fire - Mobile Battle Madness",
    description: "Free Fire delivers fast, thrilling battle royale action designed for mobile. With quick 10-minute matches, unique characters, and chaotic close-combat, it’s a go-to for gamers who crave high-energy skirmishes on the go.",
    readTime: "5 min read"
  },
  {
    id: 6,
    img: "https://4kwallpapers.com/images/walls/thumbs_3t/21057.jpg",
    trending: "GOAT",
    profile: "./ver.jpg",
    name: "PUBG: Battlegrounds",
    timeofpost: "5 hours ago",
    leftTime: "3 min ago",
    title: "PUBG - The Original Battle Royale",
    description: "PUBG set the standard for battle royale games, offering gritty realism, large-scale maps, and tension-filled survival gameplay. With every match being a new story, it’s about planning, positioning, and pulling the trigger at just the right moment.",
    readTime: "5 min read"
  }
];

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