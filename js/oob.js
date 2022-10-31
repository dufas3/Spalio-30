class Support{
    constructor(id) {
        this.id = id;
        this.date = Date.now()
    }
    setTitle(title){
        this.title = title
    }
    setDescription(description){
        this.description = description;
    }
    setPriority(priority){
        this.priority = priority;
    }

    getData(){ //Geteris
        return[
            this.id,
            this.title,
            this.description,
            this.priority
        ]
    }
}

let issue = new Support(1);
issue.setTitle("Sugedo kompas");
issue.setDescription(`nesikrauna Windows`);
issue.setPriority(`Labai svarbu`);

//Isvedimas
for(let data of issue.getData()){
    console.log(data)
}
