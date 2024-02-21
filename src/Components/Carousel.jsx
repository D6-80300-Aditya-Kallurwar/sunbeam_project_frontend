import React from "react";

const Carousel = () => {
  return (
    <>
    {/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner ">
            <div className="carousel-item active">
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/sam-bahadur-et00310187-1701157293.jpg"
                    className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/animal-et00311762-1672646524.jpg"
                    className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/dunki-et00326964-1703064829.jpg"
                    className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div> */}
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
 
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://nadsreviews.com/wp-content/uploads/2019/02/iron-man-3-banner.png" class="d-block w-100" alt="..."/>
              </div>
 
 
              <div class="carousel-item">
                <img src="https://www.napoleon.movie/assets/images/mobilebanner.jpg" class="d-block w-100" alt="..."/>
              </div>
 
              <div class="carousel-item">
                <img src="//live.staticflickr.com/2377/2451433325_e1cd787b5d_k.jpg" class="d-block w-100" alt="..."/>
              </div>
 
              <div class="carousel-item">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2e8020b-c61a-4883-9ac0-fcc0a1039091/d53hucm-d34d101a-c798-40d2-8d67-12f0e2668d94.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MyZTgwMjBiLWM2MWEtNDg4My05YWMwLWZjYzBhMTAzOTA5MVwvZDUzaHVjbS1kMzRkMTAxYS1jNzk4LTQwZDItOGQ2Ny0xMmYwZTI2NjhkOTQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cy7a3qK7rzUs_o-ujzSmRlViYrMOe8E5edbDudLQ6Y0" class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="https://i.redd.it/zz54i0jxpfny.jpg" class="d-block w-100" alt="..."/>
              </div>
            </div>
 
           <section>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
           </section>
          </div>
    </>)
};

export default Carousel;
