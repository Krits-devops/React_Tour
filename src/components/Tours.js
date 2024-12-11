import Card from "./Card";

function Tours({tours, removeTour}){

    return(
        <div>
            <div>
                {
                    tours.map((tour)=>{
                        return(
                            <Card {...tour} removeTour={removeTour}></Card>
                        )
                    })
                }
            </div>
        </div>
    );

}

export default Tours;