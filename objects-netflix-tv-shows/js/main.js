//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShow{
    constructor(showGenre, showBudget, showOrigin, showTitle){
        this.genre = showGenre
        this.Budget = showBudget
        this.origin = showOrigin
        this.title = showTitle
    }
    play(){
        console.log('Playing...')
    }
    stop(){
        console.log("Stopping...")
    }saveToList(){
        console.log("Saved to List")
    }
}

let bridgerton = new NetflixShow('Romance', 'Fuckloads', 'UK', 'Bridgerton')



