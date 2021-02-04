class Question{
    constructor(){
        this.title=createElement('h2')
        this.option1=createElement('h4')
        this.option2=createElement('h4')
        this.question=createElement('h4')
        this.input1=createInput('Enter Your Name')
        this.input2=createInput('Enter Correct Answer')
        this.button=createButton('Submit')
        this.greeting=createElement('h2')
        this.note=createElement('h3')
    }

    display(){
        this.title.html("MyQuizGame")
        this.title.position(350,0);

        this.question.html("Question:- What is the captial of USA?");
        this.question.position(150,80);

        this.option1.html("1: New York")
        this.option1.position(150,100)
        this.option2.html("2: Washinton DC");
        this.option2.position(150,120);

        this.input1.position(150,230)
        this.input2.position(350,230)

        this.button.position(200,300)
        this.greeting.html("Result of the Quiz")
        this.greeting.position(350,0)
        this.greeting.hide();

        this.note.html("*Note: Contestant who answered corect are highlighted in green color!")
        this.note.position(150,230)
        this.note.hide();

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            //console.log("hi")
            contestant.name=this.input1.value();
            contestant.distance=this.input2.value();
            contestantCount+=1;
            contestant.index=contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        })
    }
}