

import ThemeToggle from "./Components/ThemeToggle";
import BackgroundAnimations from "./Components/Background";



const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Theme Toggle */}
      <ThemeToggle />
      {/*Background Effect */}
      <BackgroundAnimations />
      <div className="relative z-10">
   {/* your content */}
</div>

      {/*Navbar*/}
      {/*Main Content */}
      {/*Footer*/}
    </div>
  )
}

export default Home


