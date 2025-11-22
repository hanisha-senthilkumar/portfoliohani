

import ThemeToggle from "./Components/ThemeToggle";
import BackgroundAnimations from "./Components/Background";
import  Navbar from "./Components/Navbar";



const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground ">
      {/*Theme Toggle */}
      <ThemeToggle />
      {/*Background Effect */}
      <BackgroundAnimations />
      <div className="relative z-10">
   {/* your content */}
</div>

      {/*Navbar*/}
      <Navbar />
      {/*Main Content */}
      {/*Footer*/}
    </div>
  )
}

export default Home


