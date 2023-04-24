import CarouselSlider from "./CarouselSlider";
import HeroSection from "./HeroSection";


export default function Home({ universities, user }){
    console.log(user)
    return (
      <>
        {/*{!user? (
          <div>
            <HeroSection recipes={recipes}/>
            <DropDown />
            <Carousel/>
          </div>
        ):(
          <div>
            <h1>Welcome, {user.name}!</h1>
            <HeroSection recipes={recipes}/>
            <DropDown />
            <Carousel />
        </div>
        )}*/}
        <div>
          <CarouselSlider universities={universities}/>
          <HeroSection /> 
        </div>
    </>
    )
}
