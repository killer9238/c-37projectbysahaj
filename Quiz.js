class Quiz{
    constructor(){

    }
    async start(){
        if(gameState===0){
            contestant=new Contestant();
            var contestantCountRef=await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount=contestantCountRef.val();
                contestant.getCount();
            }
            question=new Question();
            question.display();
        }
    }

    play(){
        background("yellow")
        question.greeting.show();
        question.note.show();
        Contestant.getContestantInfo();
       var y=300
        for(var plr in allContestants){
            console.log("sahaj")
            var correctAns="2"
            if(correctAns===allContestants[plr].distance)
            fill("green")
            else
            fill("red")
            textSize(15)
            text(allContestants[plr].name+":  " +allContestants[plr].distance,150,y)
            y=y+20
        }
    }
}