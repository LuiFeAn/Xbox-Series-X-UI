const Only = (element)=>document.querySelector(element);
const All = (element)=>document.querySelectorAll(element);
const Create = (element)=>document.createElement(element);
const Append = (father,child)=>father.appendChild(child);
const SetAtb = (element,attribute,value)=>element.setAttribute(attribute,value);
const ClassName = (element,classn)=>element.classList.add(classn);
const ClassRemove = (element,classn)=>element.classList.remove(classn);

const NodeGameList = [];

const UI = ()=>{

    const CreateGames = (img)=>{
        const GamesContainer = Only(".games-container");
        const GameContainer = Create("div");
        const GameImg = Create("img");
        Append(GameContainer,GameImg);
        SetAtb(GameImg,"src",img)
        ClassName(GameImg,"game");
        Append(GamesContainer,GameContainer);
        NodeGameList.push(GameImg);
    }
    games.map(element=>CreateGames(element.icon));

    const CreateOthers = (img)=>{
        const OthersContainer = Only(".other-options-container");
        const OtherContainer = Create("div");
        const OtherImg = Create("Img");
        ClassName(OtherContainer,"other-icons");
        Append(OtherContainer,OtherImg);
        SetAtb(OtherImg,"src",img);
        Append(OthersContainer,OtherContainer);
        NodeGameList.push(OtherImg);
    }
    others.map(element=>CreateOthers(element.icon));

    const FirstGameSet = ()=>{
        NodeGameList.map((element,id)=>{
            if(id === 0){
                ClassRemove(element,"game");
                ClassName(element,"first-game");
                ClassName(element,"selected-game");
            }
        })
    }
    FirstGameSet();

    const SelectedMove = (Main,Index)=>{
        ClassRemove(Main,"selected-game");
        ClassName(NodeGameList[Index],"selected-game");
    }

    const Inputs = ()=>{
        let index = 0;
        document.body.addEventListener("keyup",(e)=>{
            const MaiNGame = Only(".selected-game");
            switch(e.keyCode){
                case 39:
                index++;
                index > NodeGameList.length - 1 ? index = 0 : null;
                SelectedMove(MaiNGame,index);
                ChangeName(index);
                break;
                case 37:
                index--;
                index < 0 ? index = 0 : null;
                SelectedMove(MaiNGame,index);
                ChangeName(index);
                break;
            }
        })
    }
    Inputs();

    const ChangeName = (index)=>{
        const GameName = Only("#game-name");
        GameName.innerHTML = games[index].name;
    }

    const Hours = ()=>{
        const Hour = Only("#hours");
        const Dt = new Date();
        let AmPm = "";
        Dt.getHours() < 12 ? AmPm = "AM" : AmPm = "PM";
        Hour.innerHTML = `${AddZeroToDate(Dt.getHours())}:${AddZeroToDate(Dt.getMinutes())} ${AmPm}`
    }
    setInterval(() => {
        Hours();
    }, 100);

    const AddZeroToDate = (number)=>number < 10? `0${number}` : number;

    const DestroyEmpty = ()=>{
       NodeGameList.filter(({src},index)=>{
           if(src === "http://127.0.0.1:5500/box%20ui/undefined"){
              NodeGameList[index].remove();
           }
       });
    }
    DestroyEmpty();
}
UI();