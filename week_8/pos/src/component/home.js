import React from 'react';
class Home extends React.Component {
    constructor(props) {
        super(props) 
            this.state =  {
                Veg: [
                    {
                        img: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Aloo_gobi.jpg", 
                        name: "Aloo gobi",
                        desc: "Cauliflower with potatoes",
                        btn: "https://en.wikipedia.org/wiki/Aloo_gobi"
                    },
                    {
                        img: "https://upload.wikimedia.org/wikipedia/commons/9/97/Bhatura.jpg",
                        name: "Bhatura",
                        desc: "Bread. All-purpose flour",
                        btn: "https://en.wikipedia.org/wiki/Bhatoora"
                    },
                    {
                        img: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Dal_Makhani.jpg",
                        name: "Dal Makhani",
                        desc: "	Main course. Lentil.",
                        btn: "https://en.wikipedia.org/wiki/Dal_makhani"
                    },
                    {
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kashmiri_Dum_Aaloo.JPG/800px-Kashmiri_Dum_Aaloo.JPG",
                        name: "Dum aloo",
                        desc: "	Potatoes cooked in curry"  ,
                        btn: "https://en.wikipedia.org/wiki/Dum_Aloo"                      
                    },

                ],
                Non_veg: [
                    {
                        img: "https://i.ndtvimg.com/i/2015-12/grilled-chicken-625_625x350_71451368942.jpg",
                        name: "Grilled Chicken",
                        desc: "Chicken marinated in home-made",
                        btn: "https://food.ndtv.com/topic/grilled-chicken/recipes"
                    },
                    {
                        img: "https://i.ndtvimg.com/i/2015-03/badam-korma_625x350_41426244081.jpg",
                        name: "Mutton Korma",
                        desc: "A flavourful mutton curry",
                        btn: "https://food.ndtv.com/recipe-mutton-korma-100521"
                    },
                    {
                        img: "https://i.ndtvimg.com/i/2015-02/pork_625x350_81424765044.jpg",
                        name: "Pina Colada",
                        desc: "Pina Colada Pork Ribs",
                        btn: "https://food.ndtv.com/recipe-pina-colada-218866"
                    },
                    {
                        img: "https://i.ndtvimg.com/i/2016-06/lamb-chops_625x350_51466768845.jpg",
                        name: "Tandoori Lamb Chops",
                        desc: "Lamb chops marinated in strained yogur",
                        btn: "https://food.ndtv.com/recipe-tandoori-lamb-chops-641365"
                    },

                ],
                Our: [
                    {
                        img: "https://scontent-frx5-1.cdninstagram.com/vp/8078f959ec575df18afe45c286a2351e/5E0E12CD/t51.2885-15/e35/s1080x1080/67473732_2355002761441321_3280308322923997998_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=101", 
                        name: "Chicken Meal",
                        desc: "Rice and Chicken Gravy",
                        btn: "https://en.wikipedia.org/wiki/Chicken_meal",
                    },
                    {
                        img: "https://seoimgak.mmtcdn.com/blog/sites/default/files/images/famous-dishes-of-delhi-parantha.jpg",
                        name: "Paranthas",
                        desc: "To a meal for college students",
                        btn: "https://en.wikipedia.org/wiki/Paratha",
                    },
                    {
                        img: "https://seoimgak.mmtcdn.com/blog/sites/default/files/images/famous-dishes-of-delhi-butter-chicken.jpg",
                        name: "Butter Chicken",
                        desc: "Best with Rice and Naan",
                        btn: "https://en.wikipedia.org/wiki/Butter_chicken",
                    },
                    {
                        img: "https://seoimgak.mmtcdn.com/blog/sites/default/files/images/famous-dishes-of-delhi-momos.jpg",
                        name: "Momos",
                        desc: "Fried,Steamed",
                        btn: "https://en.wikipedia.org/wiki/Momo_(food)"
                    },

                ]

            }
        }
    
    render() {
        return(
            <div>
                <div className="bd-example table-size">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://images.unsplash.com/photo-1526234362653-3b75a0c07438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" className="d-block w-100 crousel-img" alt="..."/>

                            </div>
                            <div className="carousel-item">
                                <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" className="d-block w-100 crousel-img" alt="..."/>
                                    
                            </div>
                            <div className="carousel-item">
                                <img src="https://images.unsplash.com/photo-1519671282429-b44660ead0a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" className="d-block w-100 crousel-img" alt="..."/>
                                        
                            </div>
                        </div>
                            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                    </div>
                </div>
               
                <div>
                    <h1 className="text-center mt-5">Dishes</h1>
                    <h1 className = "text-center mt-2">Veg Special</h1>
                   {
                       this.state.Veg.map(item=>{
                           return(
                           <div className = "bg-danger">
                                   <div className="card w-25 float-right">
                                   <img src = {item.img} className="card-img card-img-top" />
                                   <div className="card-body bg-dark">
                                       <h6 className=" card-title text-center text-warning">{item.name}</h6>
                                        <p className="card-text text-center text-warning">{item.desc}</p>
                                        <a href={item.btn} target ="_blank"><button>Click Here to Know More About Dish</button></a>
                                   </div>
                               </div>
                           </div>
                           )
                       })
                   }
                </div>
                <div className =" mt-5">
                    <h1 className="text-center"> Non Veg Special</h1>
                    {
                        this.state.Non_veg.map(item => {
                            return (
                                <div className="bg-danger">
                                    <div className="card w-25 float-right ">
                                        <img src = {item.img} className="card-img card-img-top" />
                                        <div className="card-body bg-dark">
                                            <h6 className=" card-title text-warning text-center">{item.name}</h6>
                                            <p className="card-text text-center text-warning">{item.desc}</p>
                                            <a href={item.btn} target="_blank"><button>Click Here to Know More About Dish</button></a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=" mt-5">
                    <h1 className="text-center">Our Special</h1>
                    {
                        this.state.Our.map(item => {
                            return (
                                <div className="bg-danger">
                                    <div className="card w-25 float-right">
                                        <img src = {item.img} className="card-img card-img-top" />
                                        <div className="bg-dark card-body">
                                            <h6 className=" card-title text-center text-warning">{item.name}</h6>
                                            <p className="card-text text-center text-warning">{item.desc}</p>
                                            <a href={item.btn}><button>Click Here to Know More About Dish</button></a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        )
    }
}
export default Home;    